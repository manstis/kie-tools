export interface ValidatedType<T> {
    value: T;
    valid: boolean;
}
export declare type Validated = "success" | "error" | "default";
