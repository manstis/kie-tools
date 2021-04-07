import * as React from "react";
import { Operation } from "./components/EditorScorecard";
import { KogitoEdit } from "@kogito-tooling/channel-common-api";
import { Notification } from "@kogito-tooling/notifications/dist/api";
interface Props {
    /**
     * Callback to the container so that it may bind to the PMMLEditor.
     *
     * @returns Instance of the PMMLEditor.
     */
    exposing: (s: PMMLEditor) => void;
    /**
     * Delegation for KogitoToolingChannelCommonApi.receive_ready() to signal to the Channel
     * that the editor is ready. Increases the decoupling of the PMMLEditor from the Channel.
     */
    ready: () => void;
    /**
     * Delegation for KogitoToolingChannelCommonApi.receive_newEdit(edit) to signal to the Channel
     * that a change has taken place. Increases the decoupling of the PMMLEditor from the Channel.
     * @param edit An object representing the unique change.
     */
    newEdit: (edit: KogitoEdit) => void;
    /**
     * Delegation for NotificationsApi.setNotifications(path, notifications) to report all validation
     * notifications to the Channel that  will replace existing notification for the path. Increases the
     * decoupling of the PMMLEditor from the Channel.
     * @param path The path that references the Notification
     * @param notifications List of Notifications
     */
    setNotifications: (path: string, notifications: Notification[]) => void;
}
export interface State {
    path: string;
    content: string;
    originalContent: string;
    activeOperation: Operation;
}
export declare class PMMLEditor extends React.Component<Props, State> {
    private store;
    private readonly history;
    private readonly validationRegistry;
    private readonly reducer;
    constructor(props: Props);
    componentDidMount(): void;
    setContent(path: string, content: string): Promise<void>;
    private doSetContent;
    getContent(): Promise<string>;
    private doGetContent;
    undo(): Promise<void>;
    private doUndo;
    redo(): Promise<void>;
    private doRedo;
    validate(): Notification[];
    private isSingleModel;
    render(): JSX.Element;
}
export {};
