import * as React from "react";
import { useState } from "react";
import { Button, Title } from "@patternfly/react-core";
import { AngleRightIcon } from "@patternfly/react-icons";
import DataDictionarySection from "../../DataDictionary/DataDictionarySection/DataDictionarySection";
import {
  DataType,
  FieldName,
  MiningSchema,
  OpType,
  Output,
  RankOrder,
  ResultFeature
} from "@kogito-tooling/pmml-editor-marshaller";
import MiningSchemaSection from "../../MiningSchema/MiningSchemaSection/MiningSchemaSection";
import { Operation } from "../Operation";
import { OutputsContainer } from "../../EditorCore/organisms";
import "./FieldsSection.scss";

interface FieldsSectionProps {
  activeOperation: Operation;
  setActiveOperation?: (operation: Operation) => void;
  miningSchema?: MiningSchema;
  modelIndex: number;
  output?: Output;
  validateOutputFieldName: (index: number | undefined, name: string | undefined) => boolean;
  deleteOutputField: (index: number) => void;
  commit: (
    index: number | undefined,
    name: FieldName | undefined,
    dataType: DataType | undefined,
    optype: OpType | undefined,
    targetField: FieldName | undefined,
    feature: ResultFeature | undefined,
    value: any | undefined,
    rank: number | undefined,
    rankOrder: RankOrder | undefined,
    segmentId: string | undefined,
    isFinalResult: boolean | undefined
  ) => void;
}

const FieldsSection = (props: FieldsSectionProps) => {
  const {
    miningSchema,
    modelIndex,
    activeOperation,
    setActiveOperation,
    output,
    validateOutputFieldName,
    deleteOutputField,
    commit
  } = props;
  const [activeSection, setActiveSection] = useState(0);

  const changeSection = (section: number) => {
    if (section !== activeSection) {
      setActiveSection(section);
    }
  };

  return (
    <section className="fields-sections">
      <Button
        isBlock={true}
        variant="secondary"
        className={`fields-sections__toggle ${activeSection === 0 ? "fields-sections__toggle--active" : ""}`}
        onClick={() => changeSection(0)}
      >
        <Title size="lg" headingLevel="h1">
          Data Dictionary
        </Title>
        <AngleRightIcon className="fields-sections__toggle__icon" />
      </Button>
      {activeSection === 0 && (
        <section className="fields-sections__content">
          <DataDictionarySection />
        </section>
      )}
      <Button
        isBlock={true}
        variant="secondary"
        className={`fields-sections__toggle ${activeSection === 1 ? "fields-sections__toggle--active" : ""}`}
        onClick={() => changeSection(1)}
      >
        <Title size="lg" headingLevel="h1">
          Mining Schema
        </Title>
        <AngleRightIcon className="fields-sections__toggle__icon" />
      </Button>
      {activeSection === 1 && (
        <section className="fields-sections__content">
          <MiningSchemaSection
            miningSchema={miningSchema}
            modelIndex={modelIndex}
            activeOperation={activeOperation}
            setActiveOperation={setActiveOperation}
          />
        </section>
      )}
      <Button
        isBlock={true}
        variant="secondary"
        className={`fields-sections__toggle ${activeSection === 2 ? "fields-sections__toggle--active" : ""}`}
        onClick={() => changeSection(2)}
      >
        <Title size="lg" headingLevel="h1">
          Outputs
        </Title>
        <AngleRightIcon className="fields-sections__toggle__icon" />
      </Button>
      {activeSection === 2 && (
        <section className="fields-sections__content">
          <OutputsContainer
            modelIndex={modelIndex}
            activeOperation={activeOperation}
            setActiveOperation={setActiveOperation!}
            output={output}
            validateOutputFieldName={validateOutputFieldName}
            deleteOutputField={deleteOutputField}
            commit={commit}
          />
        </section>
      )}
    </section>
  );
};

export default FieldsSection;
