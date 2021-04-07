import "./MultipleDataTypesAdd.scss";
interface MultipleDataTypeAddProps {
    onAdd: (types: string) => void;
    onCancel: () => void;
}
declare const MultipleDataTypeAdd: ({ onAdd, onCancel }: MultipleDataTypeAddProps) => JSX.Element;
export default MultipleDataTypeAdd;
