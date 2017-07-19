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

package org.kie.workbench.common.stunner.core.client.canvas.command;

import java.util.List;
import java.util.Optional;
import java.util.function.Predicate;

import org.kie.workbench.common.stunner.core.client.canvas.AbstractCanvasHandler;
import org.kie.workbench.common.stunner.core.client.command.CanvasViolation;
import org.kie.workbench.common.stunner.core.command.impl.AbstractCompositeCommand;
import org.kie.workbench.common.stunner.core.graph.Edge;
import org.kie.workbench.common.stunner.core.graph.Element;
import org.kie.workbench.common.stunner.core.graph.Node;
import org.kie.workbench.common.stunner.core.graph.content.relationship.Child;
import org.kie.workbench.common.stunner.core.graph.content.relationship.Dock;
import org.kie.workbench.common.stunner.core.graph.util.GraphUtils;

public class UpdateDockNodeCommand extends AbstractCanvasCompositeCommand {

    private final Node parent;
    private final Node candidate;

    public UpdateDockNodeCommand(final Node parent,
                                 final Node candidate) {
        this.parent = parent;
        this.candidate = candidate;
    }

    @Override
    @SuppressWarnings("unchecked")
    protected AbstractCompositeCommand<AbstractCanvasHandler, CanvasViolation> initialize(final AbstractCanvasHandler context) {
        super.initialize(context);
        // Obtain the edge instance for the docking relationship as well.
        final Optional<Edge<?, Node>> dockEdge = getEdge(candidate.getInEdges(),
                                                         e -> e.getContent() instanceof Dock);
        // Obtain the candidate's parent too.
        final Optional<Edge<?, Node>> childEdge = getEdge(candidate.getInEdges(),
                                                          e -> e.getContent() instanceof Child);
        // Obtain the parent for the target node for docking (the 'target' one).
        final Element<?> parentParent = GraphUtils.getParent(parent);
        // Let's check if the current candidate has some parent, because
        // the docking operation implies adding the 'candidate' in the same parent node for 'target'.
        final boolean mustUpdateParent = null != parentParent &&
                childEdge
                        .filter(e -> !parentParent.equals(e.getSourceNode()))
                        .isPresent();
        if (mustUpdateParent) {
            addCommand(new RemoveChildCommand(childEdge.get().getSourceNode(),
                                              candidate));
        }
        // UnDock any existing source node from the candidate.
        dockEdge.ifPresent(e -> addCommand(new UnDockNodeCommand(e.getSourceNode(),
                                                                 candidate)));
        // Dock the candidate into the parent node, and update candidate's parent, if necessary,
        // to match the parent for 'target'.
        if (mustUpdateParent) {
            addCommand(new SetChildNodeCommand((Node) parentParent,
                                               candidate));
        }
        // Finally, dock the canddiate into the parent.
        addCommand(new DockNodeCommand(parent,
                                       candidate));
        return this;
    }

    protected Optional<Edge<?, Node>> getEdge(final List<Edge<?, Node>> edges,
                                              final Predicate<Edge> predicate) {
        if (null != edges) {
            return edges.stream()
                    .filter(predicate)
                    .findAny();
        }
        return Optional.empty();
    }

    public Node getParent() {
        return parent;
    }

    public Node getCandidate() {
        return candidate;
    }

    @Override
    public String toString() {
        return getClass().getName()
                + " [parent=" + getUUID(parent)
                + " [candidate=" + getUUID(candidate)
                + " {" + super.toString() + "}";
    }
}
