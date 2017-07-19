/*
 * Copyright 2016 Red Hat, Inc. and/or its affiliates.
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

package org.kie.workbench.common.forms.processing.engine.handling.impl.test;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

import org.kie.workbench.common.forms.processing.engine.handling.FormField;
import org.kie.workbench.common.forms.processing.engine.handling.FormFieldProvider;

public class TestFormFieldProvider implements FormFieldProvider {

    List<FormField> formFieldList = new ArrayList<>();

    public void addFormField(FormField field) {
        formFieldList.add(field);
    }

    @Override
    public FormField findFormField(String fieldName) {
        Optional<FormField> result = formFieldList.stream().filter(formField -> formField.getFieldName().endsWith(
                fieldName)).findFirst();
        if (result.isPresent()) {
            return result.get();
        }

        return null;
    }

    @Override
    public Collection<FormField> getAll() {
        return formFieldList;
    }
}
