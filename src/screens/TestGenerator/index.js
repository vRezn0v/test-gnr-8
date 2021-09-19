import React, { Component } from "react";
import Modal from 'react-awesome-modal';
import toast from "react-hot-toast";
import AddTestCase from "./Components/AddTestCase";

import InputPane from "./Components/InputPane";
import OutputPane from "./Components/OutputPane";
import './index.css';

export default class TestGenerator extends Component {
  state = {
    functionName: "",
    description: "",
    defaultReturn: "", // [input, string]
    caseList: [],
    generatedText: "",
    showAddCaseModal: false,
    modalKey: "addCase"
  }

  preGenValidator = () => {
    const { functionName, caseList } = this.state;

    if (!functionName) {
      toast("Please provide a function name.")
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
    // describe [functionName] - Description OR Test
      // it should return [expectation] for [input] as input
        // assert.[type]([functionName]([input]), [output])
  }

  generateSingleTestCase = (functionName, input, expectation, type) => {
    
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

  closeModal = () => {
    this.setState({ showAddCaseModal: false, modalKey: Math.random().toString(36).replace(/[^a-z]+/g, '') });
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
    const { caseList, functionName, description, defaultReturn, generatedText } = this.state;
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
            {generatedText && <OutputPane />}
        </div>
      </div>
    </div>)
  }
}