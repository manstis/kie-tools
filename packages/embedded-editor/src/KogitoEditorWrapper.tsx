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

import { EditorContent } from "@kogito-tooling/core-api";
import { GwtEditorRoutes } from "@kogito-tooling/kie-bc-editors";
import "@patternfly/patternfly/patternfly-addons.css";
import "@patternfly/patternfly/patternfly-variables.css";
import "@patternfly/patternfly/patternfly.css";
import * as React from "react";
import { useCallback, useImperativeHandle, useMemo, useRef } from "react";
import { File } from "./common/File";
import { GlobalContext } from "./common/GlobalContext";
import { OnlineEditorRouter } from "./common/OnlineEditorRouter";
import { Editor, EditorRef } from "./editor/Editor";
import { EnvelopeBusOuterMessageHandlerFactory } from "./editor/EnvelopeBusOuterMessageHandlerFactory";

interface Props {
  file: File;
  readonly: boolean;
  external: boolean;
  onContentReceived: (content: string) => void;
}

const iframeTemplateRelativePath: string = "envelope/index.html";

export type KogitoEditorWrapperRef = {
  requestContent(): void;
} | null;

const RefForwardingWrapper: React.RefForwardingComponent<KogitoEditorWrapperRef, Props> = (props: Props, forwardedRef) => {

  const envelopeBusOuterMessageHandlerFactory = useMemo(() => new EnvelopeBusOuterMessageHandlerFactory(), []);
  const onlineEditorRouter = useMemo(
    () =>
      new OnlineEditorRouter(
        new GwtEditorRoutes({
          bpmnPath: "gwt-editors/bpmn",
          dmnPath: "gwt-editors/dmn"
        })
      ),
    []
  );

  const editorRef = useRef<EditorRef>(null);

  const requestContent = useCallback(() => {
    console.log("content requested");
    editorRef.current?.requestContent();
  }, []);

  const onContentResponse = useCallback(
    (content: EditorContent) => {
      props.onContentReceived(content.content);
    }, []);

  useImperativeHandle(
    forwardedRef,
    () => ({
      requestContent: () => requestContent
    }),
    []
  );


  return (
    <GlobalContext.Provider
      value={{
        router: onlineEditorRouter,
        envelopeBusOuterMessageHandlerFactory: envelopeBusOuterMessageHandlerFactory,
        iframeTemplateRelativePath: iframeTemplateRelativePath,
        file: props.file,
        readonly: props.readonly
      }}
    >
      <button onClick={requestContent}>Get content (internal)</button>
      <Editor
        ref={editorRef}
        onContentResponse={onContentResponse}
      />
    </GlobalContext.Provider>
  );
};

export const KogitoEditorWrapper = React.forwardRef(RefForwardingWrapper);
