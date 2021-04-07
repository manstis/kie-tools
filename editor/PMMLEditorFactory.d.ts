import { Editor, EditorFactory, EditorInitArgs, KogitoEditorEnvelopeContextType } from "@kogito-tooling/editor/dist/api";
export declare const FACTORY_TYPE = "pmml";
export declare class PMMLEditorFactory implements EditorFactory {
    supports(fileExtension: string): boolean;
    createEditor(envelopeContext: KogitoEditorEnvelopeContextType, initArgs: EditorInitArgs): Promise<Editor>;
}
