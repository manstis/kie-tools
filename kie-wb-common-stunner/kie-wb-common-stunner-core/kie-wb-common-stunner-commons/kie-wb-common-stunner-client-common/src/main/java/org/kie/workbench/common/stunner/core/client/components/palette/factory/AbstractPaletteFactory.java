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

package org.kie.workbench.common.stunner.core.client.components.palette.factory;

import java.util.Collection;
import java.util.LinkedList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import com.google.gwt.logging.client.LogConfiguration;
import org.jboss.errai.ioc.client.api.ManagedInstance;
import org.jboss.errai.ioc.client.container.SyncBeanDef;
import org.jboss.errai.ioc.client.container.SyncBeanManager;
import org.kie.workbench.common.stunner.core.client.ShapeSet;
import org.kie.workbench.common.stunner.core.client.api.ShapeManager;
import org.kie.workbench.common.stunner.core.client.components.palette.Palette;
import org.kie.workbench.common.stunner.core.client.components.palette.model.HasPaletteItems;
import org.kie.workbench.common.stunner.core.client.components.palette.model.PaletteDefinitionBuilder;
import org.kie.workbench.common.stunner.core.client.components.palette.view.PaletteGrid;
import org.kie.workbench.common.stunner.core.client.service.ClientRuntimeError;

public abstract class AbstractPaletteFactory<I extends HasPaletteItems, P extends Palette<I>>
        implements PaletteFactory<I, P> {

    private static Logger LOGGER = Logger.getLogger(AbstractPaletteFactory.class.getName());

    protected final SyncBeanManager beanManager;
    protected final ManagedInstance<DefaultDefSetPaletteDefinitionFactory> defaultPaletteDefinitionFactoryInstance;
    protected final ManagedInstance<P> paletteInstances;
    protected final ShapeManager shapeManager;

    protected final List<DefSetPaletteDefinitionFactory> paletteDefinitionFactories = new LinkedList<>();

    public AbstractPaletteFactory(final ShapeManager shapeManager,
                                  final SyncBeanManager beanManager,
                                  final ManagedInstance<DefaultDefSetPaletteDefinitionFactory> defaultPaletteDefinitionFactoryInstance,
                                  final ManagedInstance<P> paletteInstances) {
        this.shapeManager = shapeManager;
        this.beanManager = beanManager;
        this.defaultPaletteDefinitionFactoryInstance = defaultPaletteDefinitionFactoryInstance;
        this.paletteInstances = paletteInstances;
    }

    public void init() {
        Collection<SyncBeanDef<DefSetPaletteDefinitionFactory>> factorySets = beanManager.lookupBeans(DefSetPaletteDefinitionFactory.class);
        for (SyncBeanDef<DefSetPaletteDefinitionFactory> defSet : factorySets) {
            DefSetPaletteDefinitionFactory factory = defSet.getInstance();
            paletteDefinitionFactories.add(factory);
        }
    }

    protected PaletteDefinitionFactory getPaletteDefinitionFactory(final String defSetId) {
        for (final DefSetPaletteDefinitionFactory factory : paletteDefinitionFactories) {
            if (factory.accepts(defSetId)) {
                return factory;
            }
        }
        return defaultPaletteDefinitionFactoryInstance.get();
    }

    @Override
    @SuppressWarnings("unchecked")
    public P newPalette(final String shapeSetId) {
        return newPalette(shapeSetId,
                          null);
    }

    @SuppressWarnings("unchecked")
    public P newPalette(final String shapeSetId,
                        final PaletteGrid grid) {
        final P palette = paletteInstances.get();
        final String defSetId = getShapeSet(shapeSetId).getDefinitionSetId();
        final PaletteDefinitionFactory<PaletteDefinitionBuilder<Object, I, ClientRuntimeError>> paletteDefinitionFactory = getPaletteDefinitionFactory(defSetId);
        final PaletteDefinitionBuilder<Object, I, ClientRuntimeError> paletteDefinitionBuilder = paletteDefinitionFactory.newBuilder(defSetId);
        paletteDefinitionBuilder.build(defSetId,
                                       new PaletteDefinitionBuilder.Callback<I, ClientRuntimeError>() {

                                           @Override
                                           public void onSuccess(final I paletteDefinition) {
                                               applyGrid(grid,
                                                         palette);
                                               beforeBindPalette(paletteDefinition,
                                                                 palette,
                                                                 shapeSetId);
                                               palette.bind(paletteDefinition);
                                               afterBindPalette(paletteDefinition,
                                                                palette,
                                                                shapeSetId);
                                           }

                                           @Override
                                           public void onError(final ClientRuntimeError error) {
                                               logError(error);
                                           }
                                       });
        return palette;
    }

    protected void beforeBindPalette(final I paletteDefinition,
                                     final P palette,
                                     final String shapeSetId) {
        // Implementations can performs pre-bind operations here.
    }

    protected void afterBindPalette(final I paletteDefinition,
                                    final P palette,
                                    final String shapeSetId) {
        // Implementations can performs post-bind operations here.
    }

    protected void applyGrid(final PaletteGrid grid,
                             final P palette) {
        // Implementations can apply grids to the palette, if necessary.
    }

    private ShapeSet getShapeSet(final String id) {
        for (final ShapeSet set : shapeManager.getShapeSets()) {
            if (set.getId().equals(id)) {
                return set;
            }
        }
        return null;
    }

    private void logError(final ClientRuntimeError error) {
        if (LogConfiguration.loggingIsEnabled()) {
            LOGGER.log(Level.SEVERE,
                       error.toString());
        }
    }
}
