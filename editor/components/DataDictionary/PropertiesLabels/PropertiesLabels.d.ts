import { DDDataField } from "../DataDictionaryContainer/DataDictionaryContainer";
import "./PropertiesLabels.scss";
interface PropertiesLabelsProps {
    dataType: DDDataField;
    editingIndex?: number;
    onPropertyDelete?: (dataType: DDDataField, index: number) => void;
}
declare const PropertiesLabels: (props: PropertiesLabelsProps) => JSX.Element;
export default PropertiesLabels;
