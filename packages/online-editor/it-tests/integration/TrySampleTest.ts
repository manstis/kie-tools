/*
 * Copyright 2020 Red Hat, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

describe("Try sample test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should create BPMN sample", () => {
    // clicks BPMN Try sample
    cy.get("[data-ouia-component-id='try-bpmn-sample-button']").click();

    // checks editor title name
    cy.get("[aria-label='Edit file name']").should("have.value", "sample");

    // waits until loading dialog disappears
    cy.loadEditor();

    cy.getEditor().within($bpmnEditor => {
      // opens properties panel and checks values
      cy.get("[data-title='Properties']").click();
      cy.get("[name$='diagramSet.name']").should("have.value", "Process travelers");
      cy.get("[name$='diagramSet.packageProperty']").should("have.value", "org.kie.kogito.test");
      cy.get("[name$='diagramSet.id']").should("have.value", "Travelers");

      // opens diagram panel and checks nodes
      cy.get("[data-title='Explore Diagram']").click();
      cy.get("a.gwt-Anchor").then($nodes => {
        expect($nodes).length(8);
        expect($nodes.eq(0)).text("Process travelers");
        expect($nodes.eq(1)).text("processedtraveler");
        expect($nodes.eq(2)).text("skipTraveler");
        expect($nodes.eq(3)).text("Processed Traveler?");
        expect($nodes.eq(4)).text("Process Traveler");
        expect($nodes.eq(5)).text("travelers");
        expect($nodes.eq(6)).text("Log Traveler");
        expect($nodes.eq(7)).text("Skip Traveler");
      });
    });
  });

  it("should create DMN sample", () => {
    // clicks DMN Try Sample
    cy.get("[data-ouia-component-id='try-dmn-sample-button']").click();

    // checks editor title name
    cy.get("[aria-label='Edit file name']").should("have.value", "sample");

    // waits until loading dialog disappears
    cy.loadEditor();

    // closes DMN guided tour dialog
    cy.get("[data-kgt-close='true']").click();

    cy.getEditor().within(() => {
      // opens Decision navigator and checks nodes
      cy.get("[data-ouia-component-id='collapsed-docks-bar-W'] > button").click();
      cy.get("[data-i18n-prefix='DecisionNavigatorTreeView.']").then($nodes => {
        expect($nodes).length(21);
        expect($nodes.eq(0)).not.attr("title");
        expect($nodes.eq(1)).attr("title", "loan_pre_qualification");
        expect($nodes.eq(2)).attr("title", "Applicant Data");
        expect($nodes.eq(3)).attr("title", "Back End Ratio");
        expect($nodes.eq(4)).attr("title", "Context");
        expect($nodes.eq(5)).attr("title", "Credit Score Rating");
        expect($nodes.eq(6)).attr("title", "Decision Table");
        expect($nodes.eq(7)).attr("title", "Credit Score");
        expect($nodes.eq(8)).attr("title", "DTI");
        expect($nodes.eq(9)).attr("title", "Function");
        expect($nodes.eq(10)).attr("title", "Front End Ratio");
        expect($nodes.eq(11)).attr("title", "Context");
        expect($nodes.eq(12)).attr("title", "Lender Acceptable DTI");
        expect($nodes.eq(13)).attr("title", "Function");
        expect($nodes.eq(14)).attr("title", "Lender Acceptable PITI");
        expect($nodes.eq(15)).attr("title", "Function");
        expect($nodes.eq(16)).attr("title", "Loan Pre-Qualification");
        expect($nodes.eq(17)).attr("title", "Decision Table");
        expect($nodes.eq(18)).attr("title", "PITI");
        expect($nodes.eq(19)).attr("title", "Function");
        expect($nodes.eq(20)).attr("title", "Requested Product");
      });

      // closes Decision navigator
      cy.get("[data-ouia-component-id='expanded-docks-bar-W'] > div > button ").click();

      // opens properties panel, checks values and closes panel
      cy.get("[data-title='Properties']").click();
      cy.get("[name$='definitions.nameHolder']").should("have.value", "loan_pre_qualification");
      cy.get("[data-title='Properties']").click();

      // opens Data Types tab and checks values
      cy.get("a:contains('Data Types')").click();
      cy.get(".kie-dnd-draggable:not(.hidden) .name-text").then($dataTypes => {
        expect($dataTypes).length(16);
        expect($dataTypes.eq(0)).text("Requested_Product");
        expect($dataTypes.eq(1)).text("Marital_Status");
        expect($dataTypes.eq(2)).text("Applicant_Data");
        expect($dataTypes.eq(3)).text("Post-Bureau_Risk_Category");
        expect($dataTypes.eq(4)).text("Pre-Bureau_Risk_Category");
        expect($dataTypes.eq(5)).text("Eligibility");
        expect($dataTypes.eq(6)).text("Strategy");
        expect($dataTypes.eq(7)).text("Bureau_Call_Type");
        expect($dataTypes.eq(8)).text("Product_Type");
        expect($dataTypes.eq(9)).text("Risk_Category");
        expect($dataTypes.eq(10)).text("Credit_Score_Rating");
        expect($dataTypes.eq(11)).text("Back_End_Ratio");
        expect($dataTypes.eq(12)).text("Front_End_Ratio");
        expect($dataTypes.eq(13)).text("Qualification");
        expect($dataTypes.eq(14)).text("Credit_Score");
        expect($dataTypes.eq(15)).text("Loan_Qualification");
      });
    });
  });

  it("should create PMML sample", () => {
    // clicks PMML Try Sample
    cy.get("[data-ouia-component-id='try-pmml-sample-button']").click();

    // checks editor title name
    cy.get("[aria-label='Edit file name']").should("have.value", "sample");

    // waits until loading dialog disappears
    cy.loadEditor();

    cy.getEditor().within(() => {
      cy.get(".characteristics-container div > strong").then($dataTypes => {
        expect($dataTypes).length(3);
        expect($dataTypes.eq(0)).text("departmentScore");
        expect($dataTypes.eq(1)).text("ageScore");
        expect($dataTypes.eq(2)).text("incomeScore");
      });

      cy.getEditor().within(() => {
        // Open and close PMML DataDictionary modal
        cy.get("[data-title='DataDictionary']").click();
        cy.get(".data-type-item__name").then($dataTypes => {
          expect($dataTypes).length(4);
          expect($dataTypes.eq(0)).text("department");
          expect($dataTypes.eq(1)).text("age");
          expect($dataTypes.eq(2)).text("income");
          expect($dataTypes.eq(3)).text("overallScore");
        });
        cy.get("[data-title='DataDictionaryModalClose']").click();

        // Open and close PMML MiningSchema modal
        cy.get("[data-title='MiningSchema']").click();
        cy.get(".mining-schema-list__item__name").then($miningSchema => {
          expect($miningSchema).length(4);
          expect($miningSchema.eq(0)).text("department");
          expect($miningSchema.eq(1)).text("age");
          expect($miningSchema.eq(2)).text("income");
          expect($miningSchema.eq(3)).text("overallScore");
        });
        cy.get("[data-title='MiningSchemaModalClose']").click();

        // Open and close PMML Outputs modal
        cy.get("[data-title='Outputs']").click();
        cy.get(".outputs-container div > strong").then($outputs => {
          expect($outputs).length(4);
          expect($outputs.eq(0)).text("Final Score");
          expect($outputs.eq(1)).text("Reason Code 1");
          expect($outputs.eq(2)).text("Reason Code 2");
          expect($outputs.eq(3)).text("Reason Code 3");
        });
        cy.get("[data-title='OutputsModalClose']").click();
      });
    });
  });
});
