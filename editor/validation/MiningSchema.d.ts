import { DataField, MiningField } from "@kogito-tooling/pmml-editor-marshaller";
import { ValidationRegistry } from "./ValidationRegistry";
export declare const validateMiningFields: (modelIndex: number, miningFields: MiningField[], validationRegistry: ValidationRegistry) => void;
export declare const validateMiningField: (modelIndex: number, miningFieldIndex: number, miningField: MiningField, validationRegistry: ValidationRegistry) => void;
export declare const validateMiningFieldsDataFieldReference: (modelIndex: number, dataFields: DataField[], miningFields: MiningField[], validationRegistry: ValidationRegistry) => void;
export declare const validateMiningFieldDataFieldReference: (modelIndex: number, dataFields: DataField[], miningFieldIndex: number, miningField: MiningField, validationRegistry: ValidationRegistry) => void;
export declare const areLowHighValuesRequired: (outliers: string | undefined) => boolean;
export declare const isMissingValueReplacementRequired: (missingValueTreatment: string | undefined) => boolean;
export declare const isInvalidValueReplacementRequired: (invalidValueTreatment: string | undefined) => boolean;
