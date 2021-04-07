import { DataField, DataType, OpType } from "@kogito-tooling/pmml-editor-marshaller";
import { ValidationRegistry } from "./ValidationRegistry";
export declare const validateDataFields: (dataFields: DataField[], validationRegistry: ValidationRegistry) => void;
export declare const validateDataField: (dataField: DataField, dataDictionaryIndex: number, validationRegistry: ValidationRegistry) => void;
export declare const hasValidValues: (dataField: DataField) => boolean | undefined;
export declare const hasIntervals: (dataField: DataField) => boolean | undefined;
export declare const hasOnlyEmptyIntervals: (dataField: DataField) => boolean | undefined;
export declare const hasOnlyEmptyValues: (dataField: DataField) => boolean | undefined;
export declare const shouldConstraintsBeCleared: (updatedDataField: DataField, isCyclic: "0" | "1" | undefined, dataType: DataType, optype: OpType) => boolean;
