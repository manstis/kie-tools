import * as React from "react";

import { Operation } from "../../EditorScorecard";
import MiningSchemaContainer from "../MiningSchemaContainer/MiningSchemaContainer";
import { DataDictionary, MiningField, MiningSchema, PMML } from "@kogito-tooling/pmml-editor-marshaller";
import { useDispatch, useSelector } from "react-redux";
import { Actions } from "../../../reducers";

interface MiningSchemaSectionProps {
  activeOperation: Operation;
  setActiveOperation?: (operation: Operation) => void;
  miningSchema?: MiningSchema;
  modelIndex: number;
}

const MiningSchemaSection = (props: MiningSchemaSectionProps) => {
  const { activeOperation, miningSchema, modelIndex } = props;
  const dispatch = useDispatch();
  const dataDictionary = useSelector<PMML, DataDictionary | undefined>((state: PMML) => state.DataDictionary);

  const addMiningField = (names: string[]) => {
    dispatch({
      type: Actions.AddMiningSchemaFields,
      payload: {
        modelIndex: modelIndex,
        names: names
      }
    });
  };

  const deleteMiningField = (index: number) => {
    dispatch({
      type: Actions.DeleteMiningSchemaField,
      payload: {
        modelIndex: modelIndex,
        miningSchemaIndex: index
      }
    });
  };

  const updateField = (index: number, field: MiningField) => {
    dispatch({
      type: Actions.UpdateMiningSchemaField,
      payload: {
        modelIndex: modelIndex,
        miningSchemaIndex: index,
        ...field
      }
    });
  };

  return (
    <MiningSchemaContainer
      miningSchema={miningSchema}
      dataDictionary={dataDictionary}
      onAddField={addMiningField}
      onDeleteField={deleteMiningField}
      onUpdateField={updateField}
    />
  );
};

export default MiningSchemaSection;
