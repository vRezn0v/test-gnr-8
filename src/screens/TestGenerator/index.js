import React, { Component } from "react";
import Modal from 'react-awesome-modal';
import toast, { Toaster } from "react-hot-toast";

import InputPane from "./Components/InputPane";
import OutputPane from "./Components/OutputPane";
import './index.css';

export default class TestGenerator extends Component {
  state = {
    functionName: "",
    expectations: [],
    defaultFailOutputType: "", // [input, string]
    generatedText: "",
    // testUtility: "chai" // probably an case of YAGNI
    showAddCaseModal: false
  }

  generateTests = () => {
    // [functionName] - Description OR Test
      // should return [expectation] for [input] as input
        // assert.equal([functionName]([input]), [output])
  }

  generateSingleTestCase = () => {
    
  }

  addTestCase = (payload) => {
    const { expectations = [] } = this.state;

    const { expectedOutput, input, caseType } = payload;

    const testCase = this.generateSingleTestCase(input, expectedOutput, caseType);

    this.setState({ expectations: [...expectations, testCase], showAddCaseModal: false }, () => {
      toast("Test Case Added Successfully");
    });
  }

  // ui should have functionality for copying generated cases
  renderCasesModal = () => (<Modal visible={this.state.showAddCaseModal}>
    
  </Modal>)

  render = () => {
    // input | output
    return (<div className="testGeneratorView">
      <h1>Unit Test Generator</h1>
      <div className="testGeneratorBody">
        <div className="generatorDescription">
          Hello there :)<br/>
          Just generate away, hope it saves you some time...<br/>
          (Please forgive us if there are any issues in wording of generated cases,
          We use a really primitive generation logic (string literals),<br />
          You can contribute to the development anytime here [put source code link here])
        </div>
        <div className="generatorWorkspace">
            <InputPane />
            <OutputPane />
            {/* <div className="generatorOutputPane">
              
            </div> */}
            {this.renderCasesModal()}
        </div>
      </div>
    </div>)
  }
}