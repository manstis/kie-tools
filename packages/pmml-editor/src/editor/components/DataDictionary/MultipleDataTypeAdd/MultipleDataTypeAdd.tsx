import * as React from "react";
import { useEffect, useState } from "react";
import { Button } from "@patternfly/react-core/dist/js/components/Button";
import { Text, TextContent, TextVariants } from "@patternfly/react-core/dist/js/components/Text";
import { Stack, StackItem } from "@patternfly/react-core/dist/js/layouts/Stack";
import { ActionGroup, Form, FormGroup } from "@patternfly/react-core/dist/js/components/Form";
import { TextArea } from "@patternfly/react-core/dist/js/components/TextArea";
import "./MultipleDataTypesAdd.scss";
import { Modal, ModalVariant } from "@patternfly/react-core/dist/js/components/Modal";

interface MultipleDataTypeAddProps {
  onAdd: (types: string) => void;
  onCancel: () => void;
}

const MultipleDataTypeAdd = ({ onAdd, onCancel }: MultipleDataTypeAddProps) => {
  const [input, setInput] = useState("");
  const [inputValidation, setInputValidation] = useState<"success" | "error" | "default">("default");

  useEffect(() => {
    document.querySelector<HTMLInputElement>(`#data-types`)?.focus();
  }, []);

  const handleInputChange = (value: string) => {
    setInput(value);
  };

  const validateInput = () => {
    const validation = input.trim().length > 0 ? "success" : "error";
    setInputValidation(validation);
    return validation;
  };

  const handleSubmit = (event: React.FormEvent) => {
    if (validateInput() === "success") {
      onAdd(input);
      onCancel();
    }
    event.preventDefault();
  };

  return (
    <Modal
      variant={ModalVariant.medium}
      title="Add Multiple Data Types"
      isOpen={true}
      onClose={onCancel}
      actions={[
        <Button key="confirm" variant="primary" onClick={handleSubmit}>
          Add them
        </Button>,
        <Button key="cancel" variant="link" onClick={onCancel}>
          Cancel
        </Button>,
      ]}
    >
      <Stack hasGutter={true}>
        <StackItem>
          <TextContent>
            <Text component={TextVariants.p}>
              You can add multiple data types by entering their names below. Add them one per line.
              <br />
              They will be created with the default type of <em>String</em>. You will be able to edit them later.
            </Text>
          </TextContent>
        </StackItem>
        <StackItem>
          <Form onSubmit={handleSubmit} style={{ gridGap: 0 }}>
            <FormGroup
              label="Data Types"
              fieldId="data-types"
              isRequired={true}
              validated={inputValidation}
              helperTextInvalid={"Please enter at least one Data Type Name"}
            >
              <TextArea
                className="data-dictionary__multiple-data-types"
                value={input}
                onChange={handleInputChange}
                name="data-types"
                isRequired={true}
                id="data-types"
                placeholder={"First Data Type\nSecond Data Type\n..."}
              />
            </FormGroup>
          </Form>
        </StackItem>
      </Stack>
    </Modal>
  );
};

export default MultipleDataTypeAdd;
