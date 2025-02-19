/*
 * Copyright 2018 Red Hat, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.uberfire.ext.layout.editor.client.api;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * Layout editor's element interface
 */
public interface LayoutEditorElement extends LayoutElementWithProperties {

    LayoutEditorElementType geElementType();

    void setSelectable(boolean selectable);

    boolean isSelected();

    LayoutEditorElement getParentElement();

    default List<LayoutEditorElement> getChildElements() {
        return new ArrayList<>();
    }

    default void visit(LayoutElementVisitor visitor) {
        visitor.accept(this);
        getChildElements().stream().forEach(child -> child.visit(visitor));
    }
    
    default List<LayoutEditorElementPart> getLayoutEditorElementParts() {
        return Collections.emptyList();
    }
}
