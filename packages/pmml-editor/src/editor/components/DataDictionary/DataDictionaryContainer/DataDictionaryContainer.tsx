/*
 * Copyright 2021 Red Hat, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@patternfly/react-core/dist/js/components/Button";
import { Flex, FlexItem } from "@patternfly/react-core/dist/js/layouts/Flex";
import { Bullseye } from "@patternfly/react-core/dist/js/layouts/Bullseye";
import { Alert } from "@patternfly/react-core/dist/js/components/Alert";
import { SortIcon } from "@patternfly/react-icons/dist/js/icons/sort-icon";
import { PlusIcon } from "@patternfly/react-icons/dist/js/icons/plus-icon";
import { BoltIcon } from "@patternfly/react-icons/dist/js/icons/bolt-icon";
import {
  Breadcrumb,
  BreadcrumbItem,
  Drawer,
  DrawerContent,
  DrawerContentBody,
  DrawerPanelContent,
  DrawerPanelBody,
} from "@patternfly/react-core";
import { OutlinedHandPointLeftIcon } from "@patternfly/react-icons";
import MultipleDataTypeAdd from "../MultipleDataTypeAdd/MultipleDataTypeAdd";
import DataTypesSort from "../DataTypesSort/DataTypesSort";
import EmptyDataDictionary from "../EmptyDataDictionary/EmptyDataDictionary";
import { findIncrementalName } from "../../../PMMLModelHelper";
import DataDictionaryPropertiesEdit from "../DataDictionaryPropertiesEdit/DataDictionaryPropertiesEdit";
import { isEqual } from "lodash";
import { useValidationRegistry } from "../../../validation";
import { Builder } from "../../../paths";
import "./DataDictionaryContainer.scss";
import DataTypeItemReloaded from "../DataTypeItem/DataTypeItemReloaded";
import { CSSTransition, SwitchTransition } from "react-transition-group";

interface DataDictionaryContainerProps {
  dataDictionary: DDDataField[];
  onAdd: (name: string, type: DDDataField["type"], optype: DDDataField["optype"], index?: number) => void;
  onEdit: (index: number, originalName: string, field: DDDataField) => void;
  onDelete: (index: number) => void;
  onReorder: (oldIndex: number, newIndex: number) => void;
  onBatchAdd: (fields: string[], index?: number) => void;
  onEditingPhaseChange: (status: boolean) => void;
}

const DataDictionaryContainer = (props: DataDictionaryContainerProps) => {
  const { dataDictionary, onAdd, onEdit, onDelete, onReorder, onBatchAdd, onEditingPhaseChange } = props;
  const [dataTypes, setDataTypes] = useState<DDDataField[]>(dataDictionary);
  const [editing, setEditing] = useState<number | undefined>();
  const [structureIndex, setStructureIndex] = useState<number | undefined>();
  const [viewSection, setViewSection] = useState<dataDictionarySection>("main");
  const [editingDataType, setEditingDataType] = useState<DDDataField>();
  const [sorting, setSorting] = useState(false);

  useEffect(() => {
    // undoing a recently created data field force to exit the editing mode for that field
    if (editing === dataDictionary.length) {
      setEditing(undefined);
      if (viewSection !== "main") {
        setViewSection("main");
      }
      onEditingPhaseChange(false);
    }
    // updating constraintsEdit when dictionary changes
    if (editing !== undefined) {
      if (structureIndex !== undefined) {
        if (editing === -1) {
          setEditingDataType(dataDictionary[structureIndex]);
        } else {
          setEditingDataType(dataDictionary[structureIndex].children?.[editing]);
        }
      } else {
        setEditingDataType(dataDictionary[editing]);
      }
    }
    setDataTypes(dataDictionary);
  }, [dataDictionary, editing, viewSection, structureIndex]);

  const handleOutsideClick = () => {
    setEditing(undefined);
    setEditingDataType(undefined);
    onEditingPhaseChange(false);
  };

  const addDataType = () => {
    onAdd(
      findIncrementalName(
        "New Data Type",
        structureIndex === undefined
          ? dataTypes.map((dt) => dt.name)
          : dataTypes[structureIndex].children?.map((dt) => dt.name) ?? [],
        1
      ),
      "string",
      "categorical",
      structureIndex
    );
    setEditing(structureIndex !== undefined ? dataTypes[structureIndex].children?.length ?? 0 : dataTypes.length);
    onEditingPhaseChange(true);
  };

  const saveDataType = (dataType: DDDataField, index: number) => {
    onEdit(index, dataTypes[index].name, dataType);
  };

  const handleSave = (dataType: DDDataField, index: number) => {
    saveDataType(dataType, index);
  };

  const handleDelete = (index: number) => {
    onDelete(index);
  };

  const handleEdit = (index: number) => {
    if (index === -1) {
      setEditing(-1);
    } else {
      if (dataTypes[index].type === "structure") {
        setStructureIndex(index);
        setEditing(-1);
      } else {
        setEditing(index);
      }
    }

    // setEditingDataType(dataTypes[index]);
    onEditingPhaseChange(true);
  };

  const handleMultipleAdd = (fields: string) => {
    const fieldsNames = fields.split("\n").filter((item) => item.trim().length > 0);
    onBatchAdd(fieldsNames, structureIndex);
    setViewSection("main");
  };

  // const handleConstraintsEdit = (dataType: DDDataField) => {
  //   if (editing !== undefined) {
  //     setEditingDataType(dataType);
  //     setViewSection("properties");
  //     onEditingPhaseChange(true);
  //   }
  // };

  const handleConstraintsSave = (payload: DDDataField) => {
    if (editing !== undefined) {
      onEdit(editing, dataTypes[editing].name, payload);
    }
  };

  const handlePropertiesSave = (payload: Partial<DDDataField>) => {
    if (editing !== undefined) {
      const dataType = dataTypes[editing];
      const existingPartial = {};
      Object.keys(payload).forEach((key) => Reflect.set(existingPartial, key, Reflect.get(dataType, key)));
      if (payload?.type && payload.type === "structure" && payload.type !== dataTypes[editing].type) {
        setStructureIndex(editing);
        setEditing(-1);
      }
      if (!isEqual(payload, existingPartial)) {
        onEdit(editing, dataType.name, Object.assign(dataType, payload));
      }
    }
  };

  const exitFromPropertiesEdit = () => {
    setViewSection("main");
  };

  const toggleSorting = () => {
    setEditing(undefined);
    setSorting(!sorting);
  };

  const dataTypeNameValidation = (dataTypeName: string) => {
    let isValid = true;
    if (dataTypeName.trim().length === 0) {
      return false;
    }
    const match = dataTypes.find((item, index) => item.name === dataTypeName.trim() && index !== editing);
    if (match !== undefined) {
      isValid = false;
    }
    return isValid;
  };

  const getTransition = (structureIndex: number | undefined) => {
    if (structureIndex === undefined) {
      return "data-dictionary__overview";
    } else {
      return "enter-from-right";
    }
  };

  const { validationRegistry } = useValidationRegistry();
  const validations = useRef(validationRegistry.get(Builder().forDataDictionary().build()));
  useEffect(() => {
    if (editing === undefined) {
      validations.current = validationRegistry.get(Builder().forDataDictionary().build());
    }
  }, [dataDictionary, editing]);

  return (
    <div className="data-dictionary">
      <>
        <section className="data-dictionary__overview">
          <Flex className="data-dictionary__toolbar">
            <FlexItem>
              <Button
                variant="primary"
                onClick={addDataType}
                icon={<PlusIcon />}
                iconPosition="left"
                isDisabled={sorting}
                className="ignore-onclickoutside"
              >
                Add Data Type
              </Button>
            </FlexItem>
            <FlexItem>
              <Button
                variant="secondary"
                onClick={() => setViewSection("batch-add")}
                icon={<BoltIcon />}
                iconPosition="left"
                isDisabled={sorting}
              >
                Add Multiple Data Types
              </Button>
            </FlexItem>
            <FlexItem>
              <Button
                variant={sorting ? "primary" : "secondary"}
                onClick={toggleSorting}
                icon={<SortIcon />}
                iconPosition="left"
                isDisabled={editing !== undefined}
              >
                {sorting ? "End Ordering" : "Order"}
              </Button>
            </FlexItem>
          </Flex>
          {dataTypes.length === 0 && (
            <Bullseye style={{ height: "40vh" }}>
              <EmptyDataDictionary />
            </Bullseye>
          )}
          {dataTypes.length > 0 && (
            <Drawer isStatic isExpanded={true}>
              <DrawerContent
                panelContent={
                  <DrawerPanelContent widths={{ default: "width_50" }}>
                    <DrawerPanelBody
                      hasNoPadding={true}
                      style={{ backgroundColor: "var(--pf-global--BackgroundColor--200)" }}
                    >
                      {editingDataType ? (
                        <DataDictionaryPropertiesEdit
                          dataType={editingDataType}
                          dataFieldIndex={editing}
                          onClose={exitFromPropertiesEdit}
                          onSave={handlePropertiesSave}
                        />
                      ) : (
                        <section
                          style={{ margin: "5em 0", textAlign: "center", color: "var(--pf-global--Color--200)" }}
                        >
                          Click on a data type from the list to edit its properties
                          <br />
                          <OutlinedHandPointLeftIcon style={{ fontSize: "var(--pf-global--icon--FontSize--md)" }} />
                        </section>
                      )}
                    </DrawerPanelBody>
                  </DrawerPanelContent>
                }
              >
                <DrawerContentBody
                  style={{ overflowX: "hidden", backgroundColor: "var(--pf-global--BackgroundColor--200)" }}
                >
                  <SwitchTransition mode={"out-in"}>
                    <CSSTransition
                      timeout={{
                        enter: 230,
                        exit: 100,
                      }}
                      classNames={getTransition(structureIndex)}
                      key={structureIndex ?? -1}
                    >
                      <>
                        {!sorting && (
                          <>
                            {structureIndex === undefined && (
                              <>
                                {validations.current && validations.current.length > 0 && (
                                  <section className="data-dictionary__validation-alert">
                                    <Alert
                                      variant="warning"
                                      isInline={true}
                                      title="Some items are invalid and need attention."
                                    />
                                  </section>
                                )}
                                <section className="data-dictionary__types-list-wrapper">
                                  <section className="data-dictionary__types-list">
                                    {dataTypes.map((item, index) => (
                                      <DataTypeItemReloaded
                                        dataType={item}
                                        editingIndex={editing}
                                        index={index}
                                        key={index}
                                        onSave={handleSave}
                                        onEdit={handleEdit}
                                        onDelete={handleDelete}
                                        onConstraintsSave={handleConstraintsSave}
                                        onValidate={dataTypeNameValidation}
                                        onOutsideClick={handleOutsideClick}
                                      />
                                    ))}
                                  </section>
                                </section>
                              </>
                            )}
                            {structureIndex !== undefined && (
                              <section className="data-dictionary__types-list-wrapper">
                                <section className="data-dictionary__types-list data-dictionary__types-list--with-breadcrumb">
                                  <Breadcrumb className="data-dictionary__types-list__breadcrumb">
                                    <BreadcrumbItem component={"span"}>
                                      <Button
                                        variant="link"
                                        isInline={true}
                                        onClick={() => {
                                          setStructureIndex(undefined);
                                          setEditing(undefined);
                                          setEditingDataType(undefined);
                                        }}
                                      >
                                        Data Types List
                                      </Button>
                                    </BreadcrumbItem>
                                    <BreadcrumbItem isActive>{dataTypes[structureIndex].name}</BreadcrumbItem>
                                  </Breadcrumb>
                                  <DataTypeItemReloaded
                                    dataType={dataTypes[structureIndex]}
                                    editingIndex={editing}
                                    index={-1}
                                    key={-1}
                                    onSave={handleSave}
                                    onEdit={handleEdit}
                                    onDelete={handleDelete}
                                    onConstraintsSave={handleConstraintsSave}
                                    onValidate={dataTypeNameValidation}
                                    onOutsideClick={handleOutsideClick}
                                  />
                                  <section className="data-dictionary__types-list__children">
                                    {dataTypes[structureIndex].children !== undefined &&
                                      dataTypes[structureIndex].children?.map((item, index) => (
                                        <DataTypeItemReloaded
                                          dataType={item}
                                          editingIndex={editing}
                                          index={index}
                                          key={index}
                                          onSave={handleSave}
                                          onEdit={handleEdit}
                                          onDelete={handleDelete}
                                          onConstraintsSave={handleConstraintsSave}
                                          onValidate={dataTypeNameValidation}
                                          onOutsideClick={handleOutsideClick}
                                        />
                                      ))}
                                  </section>
                                </section>
                              </section>
                            )}
                          </>
                        )}
                        {sorting && (
                          <section className="data-dictionary__types-list">
                            <DataTypesSort dataTypes={dataTypes} onReorder={onReorder} />
                          </section>
                        )}
                      </>
                    </CSSTransition>
                  </SwitchTransition>
                </DrawerContentBody>
              </DrawerContent>
            </Drawer>
          )}
        </section>
        {viewSection === "batch-add" && (
          <MultipleDataTypeAdd onAdd={handleMultipleAdd} onCancel={() => setViewSection("main")} />
        )}
      </>
    </div>
  );
};

export default DataDictionaryContainer;

export interface DDDataField {
  name: string;
  type: "string" | "integer" | "float" | "double" | "boolean" | "structure";
  optype: "categorical" | "ordinal" | "continuous";
  constraints?: Constraints;
  displayName?: string;
  isCyclic?: boolean;
  missingValue?: string;
  invalidValue?: string;
  children?: DDDataField[];
}

type dataDictionarySection = "main" | "batch-add" | "properties";

export type Constraints =
  | {
      type: ConstraintType.RANGE;
      value: RangeConstraint[];
    }
  | { type: ConstraintType.ENUMERATION; value: string[] };

export interface RangeConstraint {
  start: {
    value: string;
    included: boolean;
  };
  end: {
    value: string;
    included: boolean;
  };
}

export enum ConstraintType {
  RANGE = "Range",
  ENUMERATION = "Enumeration",
  NONE = "",
}
