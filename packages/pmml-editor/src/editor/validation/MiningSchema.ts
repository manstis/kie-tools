/*
 * Copyright 2021 Red Hat, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
import {
  DataField,
  FieldName,
  InvalidValueTreatmentMethod,
  MiningField,
  MissingValueTreatmentMethod,
  OutlierTreatmentMethod
} from "@kogito-tooling/pmml-editor-marshaller";
import { ValidationService } from "./ValidationService";
import { ValidationEntry } from "./ValidationRegistry";
import { ValidationLevel } from "./ValidationLevel";
import { Builder } from "./ValidationPath";

export const validateMiningFields = (
  modelIndex: number,
  miningFields: MiningField[],
  validationService: ValidationService
): void => {
  miningFields.forEach((miningField, miningFieldIndex) =>
    validateMiningField(modelIndex, miningFieldIndex, miningField, validationService)
  );
};

export const validateMiningField = (
  modelIndex: number,
  miningFieldIndex: number,
  miningField: MiningField,
  validationService: ValidationService
): void => {
  //Importance
  const importance = miningField.importance;
  if (importance !== undefined && (importance < 0 || importance > 1)) {
    validationService.set(
      Builder()
        .forModel(modelIndex)
        .forMiningSchema()
        .forMiningField(miningFieldIndex)
        .forImportance()
        .build(),
      new ValidationEntry(ValidationLevel.WARNING, `"${miningField.name}" Importance must be between 0 and 1.`)
    );
  }

  //Low/High values
  const { outliers, lowValue, highValue } = miningField;
  if (areLowHighValuesRequired(outliers)) {
    if (lowValue === undefined && highValue === undefined) {
      validationService.set(
        Builder()
          .forModel(modelIndex)
          .forMiningSchema()
          .forMiningField(miningFieldIndex)
          .forLowValue()
          .build(),
        new ValidationEntry(ValidationLevel.WARNING, `"${miningField.name}" Low and/or High Value must be set.`)
      );
      validationService.set(
        Builder()
          .forModel(modelIndex)
          .forMiningSchema()
          .forMiningField(miningFieldIndex)
          .forHighValue()
          .build(),
        new ValidationEntry(ValidationLevel.WARNING, `"${miningField.name}" Low and/or High Value must be set.`)
      );
    }
  } else {
    if (lowValue !== undefined) {
      validationService.set(
        Builder()
          .forModel(modelIndex)
          .forMiningSchema()
          .forMiningField(miningFieldIndex)
          .forLowValue()
          .build(),
        new ValidationEntry(ValidationLevel.WARNING, `"${miningField.name}" Low Value is not needed.`)
      );
    }
    if (highValue !== undefined) {
      validationService.set(
        Builder()
          .forModel(modelIndex)
          .forMiningSchema()
          .forMiningField(miningFieldIndex)
          .forHighValue()
          .build(),
        new ValidationEntry(ValidationLevel.WARNING, `"${miningField.name}" High Value is not needed.`)
      );
    }
  }

  //Missing values
  const { missingValueTreatment, missingValueReplacement } = miningField;
  if (isMissingValueReplacementRequired(missingValueTreatment)) {
    if (missingValueReplacement === undefined) {
      validationService.set(
        Builder()
          .forModel(modelIndex)
          .forMiningSchema()
          .forMiningField(miningFieldIndex)
          .forMissingValueReplacement()
          .build(),
        new ValidationEntry(ValidationLevel.WARNING, `"${miningField.name}" Missing Value Replacement must be set.`)
      );
    }
  } else {
    if (missingValueReplacement !== undefined) {
      validationService.set(
        Builder()
          .forModel(modelIndex)
          .forMiningSchema()
          .forMiningField(miningFieldIndex)
          .forMissingValueReplacement()
          .build(),
        new ValidationEntry(ValidationLevel.WARNING, `"${miningField.name}" Missing Value Replacement is not required.`)
      );
    }
  }

  //Invalid values
  const { invalidValueTreatment, invalidValueReplacement } = miningField;
  if (isInvalidValueReplacementRequired(invalidValueTreatment)) {
    if (invalidValueReplacement === undefined) {
      validationService.set(
        Builder()
          .forModel(modelIndex)
          .forMiningSchema()
          .forMiningField(miningFieldIndex)
          .forInvalidValueReplacement()
          .build(),
        new ValidationEntry(ValidationLevel.WARNING, `"${miningField.name}" Invalid Value Replacement must be set.`)
      );
    }
  } else {
    if (invalidValueReplacement !== undefined) {
      validationService.set(
        Builder()
          .forModel(modelIndex)
          .forMiningSchema()
          .forMiningField(miningFieldIndex)
          .forInvalidValueReplacement()
          .build(),
        new ValidationEntry(ValidationLevel.WARNING, `"${miningField.name}" Invalid Value Replacement is not required.`)
      );
    }
  }
};

export const validateMiningFieldsDataFieldReference = (
  modelIndex: number,
  dataFields: DataField[],
  miningFields: MiningField[],
  validationService: ValidationService
): void => {
  const dataFieldNames = dataFields.map(dataField => dataField.name);
  miningFields.forEach((miningField, miningFieldIndex) =>
    validateMiningFieldDataFieldReference(modelIndex, dataFieldNames, miningFieldIndex, miningField, validationService)
  );
};

const validateMiningFieldDataFieldReference = (
  modelIndex: number,
  dataFieldNames: FieldName[],
  miningFieldIndex: number,
  miningField: MiningField,
  validationService: ValidationService
): void => {
  if (dataFieldNames.filter(dataFieldName => dataFieldName === miningField.name).length === 0) {
    validationService.set(
      Builder()
        .forModel(modelIndex)
        .forMiningSchema()
        .forMiningField(miningFieldIndex)
        .forDataFieldMissing()
        .build(),
      new ValidationEntry(ValidationLevel.WARNING, `"${miningField.name}" cannot be not found in the Data Dictionary.`)
    );
  }
};

export const areLowHighValuesRequired = (outliers: OutlierTreatmentMethod | string | undefined) =>
  outliers === "asExtremeValues" || outliers === "asMissingValues";

export const isMissingValueReplacementRequired = (
  missingValueTreatment: MissingValueTreatmentMethod | string | undefined
) => missingValueTreatment === "asMean" || missingValueTreatment === "asMedian" || missingValueTreatment === "asMode";

export const isInvalidValueReplacementRequired = (
  invalidValueTreatment: InvalidValueTreatmentMethod | string | undefined
) => invalidValueTreatment === "asValue";
