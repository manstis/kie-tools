/*
 * Copyright 2020 Red Hat, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { Reducer } from "react";
import { ActionMap, Actions, AllActions } from "./Actions";
import { HistoryAwareValidatingReducer, HistoryService } from "../history";
import {
  FieldName,
  InvalidValueTreatmentMethod,
  MiningField,
  MissingValueTreatmentMethod,
  OpType,
  OutlierTreatmentMethod,
  UsageType
} from "@kogito-tooling/pmml-editor-marshaller";
import { ValidationService } from "../validation";
import {
  areLowHighValuesRequired,
  isInvalidValueReplacementRequired,
  isMissingValueReplacementRequired,
  validateMiningField,
  validateMiningFields
} from "../validation/MiningSchema";

interface MiningSchemaFieldPayload {
  [Actions.UpdateMiningSchemaField]: {
    readonly modelIndex: number;
    readonly miningSchemaIndex: number;
    readonly name: FieldName;
    readonly usageType: UsageType | undefined;
    readonly optype: OpType | undefined;
    readonly importance: number | undefined;
    readonly outliers: OutlierTreatmentMethod | undefined;
    readonly lowValue: number | undefined;
    readonly highValue: number | undefined;
    readonly missingValueReplacement: any | undefined;
    readonly missingValueTreatment: MissingValueTreatmentMethod | undefined;
    readonly invalidValueTreatment: InvalidValueTreatmentMethod | undefined;
    readonly invalidValueReplacement: any | undefined;
  };
}

export type MiningSchemaFieldActions = ActionMap<MiningSchemaFieldPayload>[keyof ActionMap<MiningSchemaFieldPayload>];

export const MiningSchemaFieldReducer: HistoryAwareValidatingReducer<MiningField[], AllActions> = (
  service: HistoryService,
  validation: ValidationService
): Reducer<MiningField[], AllActions> => {
  return (state: MiningField[], action: AllActions) => {
    switch (action.type) {
      case Actions.UpdateDataDictionaryField:
        state.forEach((mf, index) => {
          if (mf.name === action.payload.originalName) {
            service.batch(state, `models[${action.payload.modelIndex}].MiningSchema.MiningField`, draft => {
              draft[index] = {
                ...draft[index],
                name: action.payload.dataField.name
              };
            });
          }
        });
        break;

      case Actions.UpdateMiningSchemaField:
        service.batch(state, `models[${action.payload.modelIndex}].MiningSchema.MiningField`, draft => {
          const modelIndex = action.payload.modelIndex;
          const miningSchemaIndex = action.payload.miningSchemaIndex;
          const _areLowHighValuesRequired = areLowHighValuesRequired(action.payload.outliers);
          const _isMissingValueReplacementRequired = isMissingValueReplacementRequired(
            action.payload.missingValueTreatment
          );
          const _isInvalidValueReplacementRequired = isInvalidValueReplacementRequired(
            action.payload.invalidValueTreatment
          );

          if (miningSchemaIndex >= 0 && miningSchemaIndex < draft.length) {
            draft[miningSchemaIndex] = {
              ...draft[miningSchemaIndex],
              name: action.payload.name,
              usageType: action.payload.usageType,
              optype: action.payload.optype,
              importance: action.payload.importance,
              outliers: action.payload.outliers,
              lowValue: _areLowHighValuesRequired ? action.payload.lowValue : undefined,
              highValue: _areLowHighValuesRequired ? action.payload.highValue : undefined,
              missingValueTreatment: action.payload.missingValueTreatment,
              missingValueReplacement: _isMissingValueReplacementRequired
                ? action.payload.missingValueReplacement
                : undefined,
              invalidValueTreatment: action.payload.invalidValueTreatment,
              invalidValueReplacement: _isInvalidValueReplacementRequired
                ? action.payload.invalidValueReplacement
                : undefined
            };
          }
          validation.clear(`models[${modelIndex}].MiningSchema.MiningField[${miningSchemaIndex}]`);
          validateMiningField(
            action.payload.modelIndex,
            action.payload.miningSchemaIndex,
            { ...action.payload },
            validation
          );
        });
        break;

      case Actions.Validate:
        if (action.payload.modelIndex !== undefined) {
          const modelIndex = action.payload.modelIndex;
          validation.clear(`models[${modelIndex}].MiningSchema`);
          validateMiningFields(modelIndex, state, validation);
        }
    }

    return state;
  };
};
