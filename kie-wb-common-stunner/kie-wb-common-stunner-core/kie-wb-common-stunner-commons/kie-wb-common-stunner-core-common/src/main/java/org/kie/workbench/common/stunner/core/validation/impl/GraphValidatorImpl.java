/*
 * Copyright 2017 Red Hat, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.kie.workbench.common.stunner.core.validation.impl;

import java.util.Collection;
import java.util.LinkedHashSet;
import java.util.Optional;
import java.util.Set;
import java.util.Stack;
import java.util.function.BiConsumer;
import java.util.function.Consumer;
import java.util.logging.Logger;
import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;

import org.kie.workbench.common.stunner.core.api.DefinitionManager;
import org.kie.workbench.common.stunner.core.graph.Edge;
import org.kie.workbench.common.stunner.core.graph.Element;
import org.kie.workbench.common.stunner.core.graph.Graph;
import org.kie.workbench.common.stunner.core.graph.Node;
import org.kie.workbench.common.stunner.core.graph.content.definition.Definition;
import org.kie.workbench.common.stunner.core.graph.content.definition.DefinitionSet;
import org.kie.workbench.common.stunner.core.graph.content.relationship.Child;
import org.kie.workbench.common.stunner.core.graph.content.relationship.Dock;
import org.kie.workbench.common.stunner.core.graph.content.view.View;
import org.kie.workbench.common.stunner.core.graph.processing.traverse.tree.AbstractTreeTraverseCallback;
import org.kie.workbench.common.stunner.core.graph.processing.traverse.tree.TreeWalkTraverseProcessor;
import org.kie.workbench.common.stunner.core.rule.RuleManager;
import org.kie.workbench.common.stunner.core.rule.RuleSet;
import org.kie.workbench.common.stunner.core.rule.RuleViolation;
import org.kie.workbench.common.stunner.core.rule.RuleViolations;
import org.kie.workbench.common.stunner.core.rule.context.EdgeCardinalityContext;
import org.kie.workbench.common.stunner.core.rule.context.impl.RuleContextBuilder;
import org.kie.workbench.common.stunner.core.rule.violations.EmptyConnectionViolation;
import org.kie.workbench.common.stunner.core.validation.GraphValidator;

@ApplicationScoped
public class GraphValidatorImpl
        implements GraphValidator<Graph, RuleViolation> {

    private static Logger LOGGER = Logger.getLogger(GraphValidatorImpl.class.getName());

    private final DefinitionManager definitionManager;
    private final TreeWalkTraverseProcessor treeWalkTraverseProcessor;
    private final RuleManager ruleManager;

    protected GraphValidatorImpl() {
        this(null,
             null,
             null);
    }

    @Inject
    public GraphValidatorImpl(final DefinitionManager definitionManager,
                              final RuleManager ruleManager,
                              final TreeWalkTraverseProcessor treeWalkTraverseProcessor) {
        this.definitionManager = definitionManager;
        this.ruleManager = ruleManager;
        this.treeWalkTraverseProcessor = treeWalkTraverseProcessor;
    }

    @Override
    @SuppressWarnings("unchecked")
    public void validate(final Graph graph,
                         final Consumer<Collection<RuleViolation>> callback) {
        validate(graph,
                 null,
                 callback);
    }

    @Override
    public void validate(final Graph graph,
                         final RuleSet ruleSet,
                         final Consumer<Collection<RuleViolation>> callback) {
        this.validate(graph,
                      Optional.ofNullable(ruleSet),
                      Optional.empty(),
                      Optional.empty(),
                      Optional.empty(),
                      callback);
    }

    /**
     * Performs the validation for the <code>graph</code> instance.
     * @param graph The instance to validate.
     * @param aRuleSet An optional rule set instance to validate against it. If not present, the default
     * rule set for the the graph will be used.
     * @param graphValidatorConsumer An optional consumer for the graph instance when is being validated.
     * @param nodeValidatorConsumer An optional consumer each node instance when being validated.
     * @param edgeValidatorConsumer An optional consumer each edge instance when being validated.
     * @param resultConsumer The consumer for all the resulting validation violations produced during the
     * validator for the graph, and all of its nodes and edges. It's being called once the
     * validation has been completed.
     */
    @SuppressWarnings("unchecked")
    void validate(final Graph graph,
                  final Optional<RuleSet> aRuleSet,
                  final Optional<BiConsumer<Graph, Collection<RuleViolation>>> graphValidatorConsumer,
                  final Optional<BiConsumer<Node, Collection<RuleViolation>>> nodeValidatorConsumer,
                  final Optional<BiConsumer<Edge, Collection<RuleViolation>>> edgeValidatorConsumer,
                  Consumer<Collection<RuleViolation>> resultConsumer) {
        final RuleSet ruleSet = aRuleSet.orElse(getRuleSet(graph));
        final ViolationsSet violations = new ViolationsSet();
        treeWalkTraverseProcessor
                .traverse(graph,
                          new AbstractTreeTraverseCallback<org.kie.workbench.common.stunner.core.graph.Graph, Node, Edge>() {

                              private final Stack<Node> currentParents = new Stack<Node>();

                              @Override
                              public void
                              startGraphTraversal(final org.kie.workbench.common.stunner.core.graph.Graph graph) {
                                  super.startGraphTraversal(graph);
                                  currentParents.clear();
                                  // Evaluate the graph's cardinality rules.
                                  final Set<RuleViolation> graphCardinalityViolations =
                                          violations.addViolations(evaluateCardinality(ruleSet,
                                                                                       graph));
                                  graphValidatorConsumer.ifPresent(g -> g.accept(graph,
                                                                                 graphCardinalityViolations));
                              }

                              @Override
                              public boolean startEdgeTraversal(final Edge edge) {
                                  super.startEdgeTraversal(edge);
                                  final Object content = edge.getContent();
                                  final ViolationsSet edgeViolations =
                                          new ViolationsSet();
                                  if (content instanceof Child) {
                                      this.currentParents.push(edge.getSourceNode());
                                  } else if (content instanceof View) {
                                      final Optional<Node<? extends View<?>, ? extends Edge>> sourceOpt =
                                              Optional.ofNullable(edge.getSourceNode());
                                      final Optional<Node<? extends View<?>, ? extends Edge>> targetOpt =
                                              Optional.ofNullable(edge.getTargetNode());
                                      // Check not empty connections.
                                      final Optional<RuleViolation> emptyConnectionViolation =
                                              evaluateNotEmptyConnections(graph,
                                                                          edge,
                                                                          sourceOpt,
                                                                          targetOpt);
                                      emptyConnectionViolation.ifPresent(edgeViolations::add);
                                      // Evaluate connection rules.
                                      edgeViolations.addViolations(
                                              evaluateConnection(ruleSet,
                                                                 graph,
                                                                 edge,
                                                                 sourceOpt,
                                                                 targetOpt)
                                      );
                                      // Evaluate connector cardinality rules for this edge.
                                      if (null != edge.getTargetNode()) {
                                          edgeViolations.addViolations(
                                                  evaluateIncomingEdgeCardinality(ruleSet,
                                                                                  graph,
                                                                                  edge)
                                          );
                                      }
                                      if (null != edge.getSourceNode()) {
                                          edgeViolations.addViolations(
                                                  evaluateOutgoingEdgeCardinality(ruleSet,
                                                                                  graph,
                                                                                  edge)
                                          );
                                      }
                                  } else if (content instanceof Dock) {
                                      final Node parent = edge.getSourceNode();
                                      final Node docked = edge.getTargetNode();
                                      // Evaluate docking rules for the source & target nodes.
                                      edgeViolations.addViolations(evaluateDocking(ruleSet,
                                                                                   graph,
                                                                                   parent,
                                                                                   docked));
                                  }
                                  edgeValidatorConsumer.ifPresent(c -> c.accept(edge,
                                                                                edgeViolations));
                                  violations.addAll(edgeViolations);
                                  return true;
                              }

                              @Override
                              public void endEdgeTraversal(final Edge edge) {
                                  super.endEdgeTraversal(edge);
                                  if (edge.getContent() instanceof Child) {
                                      this.currentParents.pop();
                                  }
                              }

                              @Override
                              public boolean startNodeTraversal(final Node node) {
                                  super.startNodeTraversal(node);
                                  final Collection<RuleViolation> nodeViolations =
                                          evaluateNode(node,
                                                       currentParents.isEmpty() ?
                                                               null :
                                                               currentParents.peek());
                                  nodeValidatorConsumer.ifPresent(c -> c.accept(node,
                                                                                nodeViolations));
                                  return true;
                              }

                              @Override
                              public void endGraphTraversal() {
                                  super.endGraphTraversal();

                                  // Finished - feed the consumer instance.
                                  resultConsumer.accept(violations);
                              }

                              private Collection<RuleViolation> evaluateNode(final Node node,
                                                                             final Node parent) {
                                  // Evaluate containment rules for this node.
                                  return violations.addViolations(evaluateContainment(ruleSet,
                                                                                      graph,
                                                                                      null != parent ? parent : graph,
                                                                                      node));
                              }
                          });
    }

    private RuleSet getRuleSet(final Graph<? extends DefinitionSet, ?> graph) {
        final String defSetId = graph.getContent().getDefinition();
        final Object definitionSet = definitionManager.definitionSets().getDefinitionSetById(defSetId);
        return definitionManager.adapters().forRules().getRuleSet(definitionSet);
    }

    @SuppressWarnings("unchecked")
    private RuleViolations evaluateContainment(final RuleSet ruleSet,
                                               final Graph graph,
                                               final Element<? extends Definition<?>> parent,
                                               final Node candidate) {
        log(" CONTAINMENT " +
                    "[parent=" + parent +
                    ",candidate=" + candidate + "]");
        return ruleManager
                .evaluate(ruleSet,
                          RuleContextBuilder.GraphContexts.containment(graph,
                                                                       parent,
                                                                       candidate));
    }

    @SuppressWarnings("unchecked")
    private RuleViolations evaluateCardinality(final RuleSet ruleSet,
                                               final Graph graph) {
        log(" CARDINALITY [graph=" + graph + "]");
        return ruleManager
                .evaluate(ruleSet,
                          RuleContextBuilder.GraphContexts.cardinality(graph,
                                                                       Optional.empty(),
                                                                       Optional.empty()));
    }

    @SuppressWarnings("unchecked")
    private RuleViolations evaluateDocking(final RuleSet ruleSet,
                                           final Graph graph,
                                           final Element<? extends Definition<?>> parent,
                                           final Node candidate) {
        log(" DOCKING " +
                    "[parent=" + (parent.getUUID()) +
                    ",candidate=" + candidate.getUUID() + "]");
        return ruleManager
                .evaluate(ruleSet,
                          RuleContextBuilder.GraphContexts.docking(graph,
                                                                   parent,
                                                                   candidate));
    }

    /**
     * Actually the different commands allows removing nodes that have
     * incoming or outgoing view connectors, as connectors can be re-attached to
     * a different node, but the graph structure is not considered valid, so the
     * diagram cannot be updated until fixing that connections.
     * So there exist no rule for empty connections, actually it's just a common validation.
     */
    @SuppressWarnings("unchecked")
    private Optional<RuleViolation> evaluateNotEmptyConnections(final Graph<?, ? extends Node> graph,
                                                                final Edge<? extends View<?>, ? extends Node> connector,
                                                                final Optional<Node<? extends View<?>, ? extends Edge>> sourceNode,
                                                                final Optional<Node<? extends View<?>, ? extends Edge>> targetNode) {

        log(" NOT_EMPTY_CONNECTIONS " +
                    "[edge=" + connector +
                    ",source=" + sourceNode.orElse(null) +
                    ",target=" + targetNode.orElse(null) + "]");
        if (!sourceNode.isPresent() || !targetNode.isPresent()) {
            return Optional.of(EmptyConnectionViolation.Builder.build(connector,
                                                                      sourceNode,
                                                                      targetNode));
        }
        return Optional.empty();
    }

    @SuppressWarnings("unchecked")
    private RuleViolations evaluateConnection(final RuleSet ruleSet,
                                              final Graph<?, ? extends Node> graph,
                                              final Edge<? extends View<?>, ? extends Node> connector,
                                              final Optional<Node<? extends View<?>, ? extends Edge>> sourceNode,
                                              final Optional<Node<? extends View<?>, ? extends Edge>> targetNode) {
        log(" CONNECTION " +
                    "[edge=" + connector +
                    ",source=" + sourceNode.orElse(null) +
                    ",target=" + targetNode.orElse(null) + "]");
        return ruleManager
                .evaluate(ruleSet,
                          RuleContextBuilder.GraphContexts.connection(graph,
                                                                      connector,
                                                                      sourceNode,
                                                                      targetNode));
    }

    @SuppressWarnings("unchecked")
    private RuleViolations evaluateIncomingEdgeCardinality(final RuleSet ruleSet,
                                                           final org.kie.workbench.common.stunner.core.graph.Graph graph,
                                                           final Edge<? extends View, Node> edge) {
        log(" IN-EDGE CARDINALITY [edge=" + edge + "]");
        return ruleManager
                .evaluate(ruleSet,
                          RuleContextBuilder.GraphContexts.edgeCardinality(graph,
                                                                           edge.getTargetNode(),
                                                                           (Edge<? extends View<?>, Node>) edge,
                                                                           EdgeCardinalityContext.Direction.INCOMING,
                                                                           Optional.empty()));
    }

    @SuppressWarnings("unchecked")
    private RuleViolations evaluateOutgoingEdgeCardinality(final RuleSet ruleSet,
                                                           final org.kie.workbench.common.stunner.core.graph.Graph graph,
                                                           final Edge<? extends View, Node> edge) {
        log(" OUT-EDGE CARDINALITY [edge=" + edge + "]");
        return ruleManager
                .evaluate(ruleSet,
                          RuleContextBuilder.GraphContexts.edgeCardinality(graph,
                                                                           edge.getSourceNode(),
                                                                           (Edge<? extends View<?>, Node>) edge,
                                                                           EdgeCardinalityContext.Direction.OUTGOING,
                                                                           Optional.empty()));
    }

    private class ViolationsSet extends LinkedHashSet<RuleViolation> {

        public Set<RuleViolation> addViolations(final RuleViolations items) {
            final Set<RuleViolation> result = new LinkedHashSet<>();
            items.violations().forEach(v -> {
                result.add(v);
                ViolationsSet.this.add(v);
            });
            return result;
        }
    }

    private void log(final String message) {
        LOGGER.info(message);
    }
}
