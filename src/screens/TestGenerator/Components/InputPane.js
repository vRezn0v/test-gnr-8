import _ from "lodash";
import React, { Component } from "react";
import { ASSERTION_TYPES } from "../../../utils/enums";

export default class InputPane extends Component {

  renderCaseCard = entry => (
    <div className="caseInfoCard">
      <div className="cardRow">
        <span className="cardRowLabel">Input:</span>
        <span className="cardRowValue">{entry.input}</span>
      </div>
      <div className="cardRow">
        <span className="cardRowLabel">Assertion:</span>
        <span className="cardRowValue">{_.get(_.find(ASSERTION_TYPES, data => data.value === entry.type), "name")}</span>
      </div>
      <div className="cardRow">
        <span className="cardRowLabel">Expected Output:</span>
        <span className="cardRowValue">{entry.expectation}</span>
      </div>
    </div>
  )
  render = () => {
    const { inputHandler, generateTests, showCaseModal, caseList = [], values = {} } = this.props;

    const { functionName, description, defaultReturn } = values;

    return (<div className="generatorInputPane">
      <div className="inputPaneHeader">
        <input name="functionName" value={functionName} className="textInput" placeholder="Method Name" onChange={inputHandler} />
        <input name="description" value={description} className="textInput grow" placeholder="Description (optional)" onChange={inputHandler} />
        <input name="defaultReturn" value={defaultReturn} className="textInput" placeholder="Default Output (optional)" onChange={inputHandler} />
      </div>
      <button className="addCaseButton" onClick={() => showCaseModal()}>Add Case</button>
      <div className="inputPaneBody">
        {_.map(caseList.map((entry = {}) => (this.renderCaseCard(entry))))}
      </div>
      <button className="generateTrigger" onClick={generateTests}>
        Generate Tests
      </button>
    </div>)
  }
}