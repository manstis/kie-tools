import * as React from "react";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { Button, ButtonVariant } from "@patternfly/react-core/dist/js/components/Button";
import { Split, SplitItem } from "@patternfly/react-core/dist/js/layouts/Split";
import { Modal, ModalVariant } from "@patternfly/react-core/dist/js/components/Modal";
import { Title, TitleSizes } from "@patternfly/react-core/dist/js/components/Title";
import { CloseIcon } from "@patternfly/react-icons/dist/js/icons/close-icon";
import { WarningTriangleIcon } from "@patternfly/react-icons/dist/js/icons/warning-triangle-icon";
import { DataDictionary, FieldName, PMML } from "@kogito-tooling/pmml-editor-marshaller";
import { Actions } from "../../../reducers";
import DataDictionaryContainer, { DDDataField } from "../DataDictionaryContainer/DataDictionaryContainer";
import { convertPMML2DD, convertToDataField } from "../dataDictionaryUtils";
import { Operation, useOperation } from "../../EditorScorecard";
import { useBatchDispatch, useHistoryService } from "../../../history";
import { useValidationRegistry } from "../../../validation";
import { Builder } from "../../../paths";
import { ValidationIndicatorTooltip } from "../../EditorCore/atoms";
import DataDictionaryContainerReloaded from "../DataDictionaryContainer/DataDictionaryContainerReloaded";

const DataDictionaryHandler = () => {
  const [isDataDictionaryOpen, setIsDataDictionaryOpen] = useState(false);
  const pmmlDataDictionary = useSelector<PMML, DataDictionary | undefined>((state: PMML) => state.DataDictionary);
  const [dictionary, setDictionary] = useState(convertPMML2DD(pmmlDataDictionary));
  const { setActiveOperation } = useOperation();

  const { service, getCurrentState } = useHistoryService();
  const dispatch = useBatchDispatch(service, getCurrentState);

  // const handleDataDictionaryToggle = () => {
  //   setActiveOperation(Operation.NONE);
  //   setIsDataDictionaryOpen(!isDataDictionaryOpen);
  // };

  const addField = (name: string, type: DDDataField["type"], optype: DDDataField["optype"]) => {
    // dispatch({
    //   type: Actions.AddDataDictionaryField,
    //   payload: {
    //     name: name,
    //     type: type,
    //     optype: optype,
    //   },
    // });
    setDictionary((previousDictionary) => [
      ...previousDictionary,
      {
        name,
        type,
        optype,
      },
    ]);
  };

  const addBatchFields = (fields: string[]) => {
    // dispatch({
    //   type: Actions.AddBatchDataDictionaryFields,
    //   payload: {
    //     dataDictionaryFields: fields,
    //   },
    // });
    setDictionary((previousDictionary) => {
      return [
        ...previousDictionary,
        ...fields.map((field) => ({
          name: field,
          type: "string" as DDDataField["type"],
          optype: "categorical" as DDDataField["optype"],
        })),
      ];
    });
  };

  const deleteField = (index: number) => {
    // dispatch({
    //   type: Actions.DeleteDataDictionaryField,
    //   payload: {
    //     index,
    //   },
    // });
    if (index >= 0 && index < dictionary.length) {
      setDictionary((previousDictionary) => {
        return previousDictionary.filter((field, fieldIndex) => fieldIndex !== index);
      });
    }
  };

  const reorderFields = (oldIndex: number, newIndex: number) => {
    dispatch({
      type: Actions.ReorderDataDictionaryFields,
      payload: {
        oldIndex,
        newIndex,
      },
    });
  };

  const updateField = (index: number, originalName: string, field: DDDataField) => {
    dispatch({
      type: Actions.UpdateDataDictionaryField,
      payload: {
        dataDictionaryIndex: index,
        dataField: convertToDataField(field),
        originalName: originalName as FieldName,
      },
    });
  };

  const handleEditingPhase = (status: boolean) => {
    setActiveOperation(status ? Operation.UPDATE_DATA_DICTIONARY : Operation.NONE);
  };

  const { validationRegistry } = useValidationRegistry();
  const validations = useMemo(() => validationRegistry.get(Builder().forDataDictionary().build()), [dictionary]);

  return (
    <>
      {/*{validations.length === 0 && (*/}
      {/*  <Button variant="secondary" onClick={handleDataDictionaryToggle} data-title="DataDictionary">*/}
      {/*    Set Data Dictionary*/}
      {/*  </Button>*/}
      {/*)}*/}
      {/*{validations.length > 0 && (*/}
      {/*  <ValidationIndicatorTooltip validations={validations}>*/}
      {/*    <Button*/}
      {/*      variant="secondary"*/}
      {/*      icon={<WarningTriangleIcon size={"sm"} color={"orange"} />}*/}
      {/*      onClick={handleDataDictionaryToggle}*/}
      {/*      data-title="DataDictionary"*/}
      {/*    >*/}
      {/*      Set Data Dictionary*/}
      {/*    </Button>*/}
      {/*  </ValidationIndicatorTooltip>*/}
      {/*)}*/}

      <DataDictionaryContainerReloaded
        dataDictionary={dictionary}
        onAdd={addField}
        onEdit={updateField}
        onDelete={deleteField}
        onReorder={reorderFields}
        onBatchAdd={addBatchFields}
        onEditingPhaseChange={handleEditingPhase}
      />
    </>
  );
};

export default DataDictionaryHandler;
