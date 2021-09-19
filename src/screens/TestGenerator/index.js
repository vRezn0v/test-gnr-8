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
    caseList: [],
    defaultFailOutputType: "", // [input, string]
    generatedText: "",
    showAddCaseModal: false,
  }

  generateTests = () => {
    // describe [functionName] - Description OR Test
      // it should return [expectation] for [input] as input
        // assert.[type]([functionName]([input]), [output])
  }

  generateSingleTestCase = (functionName, input, expectation, type) => {
    
  }

  addTestCase = (payload) => {
    const { caseList = [] } = this.state;

    this.setState({ caseList: [...caseList, payload], showAddCaseModal: false }, () => {
      toast("Test Case Added Successfully");
    });
  }

  showCaseModal = () => this.setState({ showAddCaseModal: true });

  closeModal = () => {
    this.setState({ showAddCaseModal: false });
  }

  renderCasesModal = () => (<Modal
      visible={this.state.showAddCaseModal}
      width={"50%"}
      height={"60%"}
      onClickAway={this.closeModal}>
    <AddTestCase addTestCase={this.addTestCase} closeModal={this.closeModal} />
  </Modal>)

  render = () => {
    const { caseList } = this.state;
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
              caseList={caseList} />
            <OutputPane />
        </div>
      </div>
    </div>)
  }
}