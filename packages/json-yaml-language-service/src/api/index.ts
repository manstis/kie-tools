/*
 * Copyright 2023 Red Hat, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * File language for an opened file in the text editor.
 */
export enum FileLanguage {
  JSON = "json",
  YAML = "yaml",
}

/**
 * Get the file language from a filename or path
 *
 * @param fileName the filename or path
 * @returns the file language, null if not found
 */
export const getFileLanguageEditorLS = (fileName: string): FileLanguage | null => {
  if (/\.json$/i.test(fileName)) {
    return FileLanguage.JSON;
  }

  if (/\.(yml|yaml)$/i.test(fileName)) {
    return FileLanguage.YAML;
  }

  return null;
};

export * from "./EditorLanguageServiceChannelApi";
