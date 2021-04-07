import { Characteristic } from "@kogito-tooling/pmml-editor-marshaller";
import { ValidationRegistry } from "./ValidationRegistry";
export declare const validateBaselineScore: (modelIndex: number, useReasonCodes: boolean | undefined, baselineScore: number | undefined, characteristics: Characteristic[], validationRegistry: ValidationRegistry) => void;
