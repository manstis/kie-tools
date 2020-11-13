import * as React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEqual } from "lodash";
import { DataDictionary, PMML } from "@kogito-tooling/pmml-editor-marshaller";
import { Actions } from "../../../reducers";
import DataDictionaryContainer, { DataField } from "../DataDictionaryContainer/DataDictionaryContainer";
import { convertDD2PMML, convertPMML2DD } from "../dataDictionaryUtils";
import { Operation } from "../../EditorScorecard";

interface DataDictionarySectionProps {
  activeOperation?: Operation;
  setActiveOperation?: (operation: Operation) => void;
}

const DataDictionarySection = () => {
  const dispatch = useDispatch();
  const pmmlDataDictionary = useSelector<PMML, DataDictionary | undefined>((state: PMML) => state.DataDictionary);
  const [dictionary, setDictionary] = useState<DataField[]>(convertPMML2DD(pmmlDataDictionary));
  const handleDataDictionaryUpdate = (updatedDictionary: DataField[]) => {
    setDictionary(updatedDictionary);
  };

  const handleDataDictionaryToggle = () => {
    const convertedDataDictionary = convertDD2PMML(dictionary);
    // temporary: checking if they are equals to prevent dispatching actions with no data changes
    if (!isEqual(pmmlDataDictionary?.DataField, convertedDataDictionary)) {
      dispatch({
        type: Actions.SetDataFields,
        payload: {
          dataFields: convertedDataDictionary
        }
      });
    }
  };

  useEffect(() => {
    setDictionary(convertPMML2DD(pmmlDataDictionary));
  }, [pmmlDataDictionary]);

  return <DataDictionaryContainer dataDictionary={dictionary} onUpdate={handleDataDictionaryUpdate} />;
};

export default DataDictionarySection;
