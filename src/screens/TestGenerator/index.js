import React, { Component } from "react";
import Modal from 'react-awesome-modal';
import toast from "react-hot-toast";
import { assertionTypeEnum, typeToFunctionEnum } from "../../utils/enums";
import AddTestCase from "./Components/AddTestCase";

import InputPane from "./Components/InputPane";
import OutputPane from "./Components/OutputPane";
import './index.css';

export default class TestGenerator extends Component {
  state = {
    functionName: "",
    description: "",
    defaultReturn: "",
    caseList: [],
    generatedCases: "",
    showAddCaseModal: false,
    modalKey: "addCase",
    outputKey: "output"
  }

  preGenValidator = () => {
    const { functionName, caseList } = this.state;

    if (!functionName) {
      toast("Please provide a function name.")
      return false;
    }

    if (functionName.split(" ").length > 1) {
      toast("Function name can not include spaces.");
      return false;
    }

    if (caseList.length === 0) {
      toast("Please add at least one test case.")
      return false;
    }

    return true; 
  }

  generateTests = () => {
    if (!this.preGenValidator()) return;

    const { functionName, description, caseList } = this.state;

    const functionDescription = description ? `- ${description}` : ``;

    let result = `describe("${functionName} ${functionDescription}", () => {\n`
    
    for (let entry of caseList) {
      const { input, expectation, type } = entry;
      result += this.generateSingleTestCase(functionName, input, expectation, type);
    }

    result += `});`

    this.setState({ generatedCases: result, outputKey: this.generateRandomKey() });
  }

  generateSingleTestCase = (functionName, input, expectation, type) => {
    return `\tit("${assertionTypeEnum[type]} [${expectation}] for [${input}] as input.", () => {\n
    \t\tassert.${typeToFunctionEnum[type]}(${functionName}(${input}), ${expectation});
    });\n`;
  }

  addTestCase = (payload) => {
    const { caseList = [], defaultReturn } = this.state;

    let testCase = {...payload};
    
    if (!payload.input) return toast("Please provide an Input value.");

    if (!testCase.expectation && defaultReturn) testCase.expectation = defaultReturn;


    this.setState({ caseList: [...caseList, testCase] }, () => {
      this.closeModal();
      toast("Test Case Added Successfully");
    });
  }

  showCaseModal = () => this.setState({ showAddCaseModal: true });

  generateRandomKey = () => (Math.random().toString(36).replace(/[^a-z]+/g, ''));

  closeModal = () => {
    this.setState({ showAddCaseModal: false, modalKey: this.generateRandomKey() });
  }

  renderCasesModal = () => (<Modal
      visible={this.state.showAddCaseModal}
      width={"50%"}
      height={"25%"}
      onClickAway={this.closeModal}>
    <AddTestCase key={this.state.modalKey} addTestCase={this.addTestCase} closeModal={this.closeModal} />
  </Modal>)

  inputHandler = (e) => this.setState({ [e.target.name]: e.target.value });

  render = () => {
    const { outputKey, caseList, functionName, description, defaultReturn, generatedCases } = this.state;
    // input | output
    return (<div className="testGeneratorView">
      <h1>Unit Test Generator</h1>
      {this.renderCasesModal()}
      <div className="testGeneratorBody">
        <div className="generatorDescription">
          Hello there :)<br/>
          Just generate away, hope it saves you some time...<br/>
          (Please forgive us if there are any issues in wording of generated cases,
          We use a really primitive generation logic (string literals),<br />
          You can contribute to the development anytime here [put source code link here])
        </div>
        <div className="generatorWorkspace">
            <InputPane
              showCaseModal={this.showCaseModal}
              inputHandler={this.inputHandler}
              caseList={caseList}
              generateTests={this.generateTests}
              values={{
                functionName, description, defaultReturn
              }} />
            {generatedCases && <OutputPane key={outputKey} generatedCases={generatedCases} />}
        </div>
      </div>
    </div>)
  }
}