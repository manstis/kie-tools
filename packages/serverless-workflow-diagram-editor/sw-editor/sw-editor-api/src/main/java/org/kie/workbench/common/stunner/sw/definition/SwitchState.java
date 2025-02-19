/*
 * Copyright 2022 Red Hat, Inc. and/or its affiliates.
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

package org.kie.workbench.common.stunner.sw.definition;

import jsinterop.annotations.JsType;
import org.kie.workbench.common.stunner.client.json.mapper.annotation.JSONMapper;
import org.kie.workbench.common.stunner.client.yaml.mapper.api.annotation.YAMLMapper;
import org.kie.workbench.common.stunner.client.yaml.mapper.api.annotation.YamlPropertyOrder;

@JSONMapper
@YAMLMapper
@JsType
@YamlPropertyOrder({"name", "type", "dataConditions", "eventConditions", "transition", "end", "onErrors", "usedForCompensation", "compensatedBy", "dataConditions", "stateDataFilter", "timeouts", "eventTimeout", "metadata"})
public class SwitchState extends State {

    public static final String TYPE_SWITCH = "switch";

    public DefaultConditionTransition defaultCondition;

    public EventConditionTransition[] eventConditions;

    public DataConditionTransition[] dataConditions;

    public Boolean usedForCompensation;

    public SwitchState() {
        this.type = TYPE_SWITCH;
    }

    public DefaultConditionTransition getDefaultCondition() {
        return defaultCondition;
    }

    public void setDefaultCondition(DefaultConditionTransition defaultCondition) {
        this.defaultCondition = defaultCondition;
    }

    public EventConditionTransition[] getEventConditions() {
        return eventConditions;
    }

    public void setEventConditions(EventConditionTransition[] eventConditions) {
        this.eventConditions = eventConditions;
    }

    public DataConditionTransition[] getDataConditions() {
        return dataConditions;
    }

    public void setDataConditions(DataConditionTransition[] dataConditions) {
        this.dataConditions = dataConditions;
    }

    public Boolean getUsedForCompensation() {
        return usedForCompensation;
    }

    public void setUsedForCompensation(Boolean usedForCompensation) {
        this.usedForCompensation = usedForCompensation;
    }
}
