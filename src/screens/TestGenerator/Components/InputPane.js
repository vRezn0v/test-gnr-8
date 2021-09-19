import _ from "lodash";
import React, { Component } from "react";

export default class InputPane extends Component {
  
  render = () => {
    const { onInputChange, generateTests, showCaseModal, caseList=[] } = this.props;

    return (<div className="generatorInputPane">
      <div className="inputPaneHeader">
        <input name="methodName" className="textInput" placeholder="Method Name" onChange={onInputChange} />
        <input name="functionDescription" className="textInput grow" placeholder="Description (optional)" onChange={onInputChange} />
        <input name="defaultReturn" className="textInput" placeholder="Default Output (optional)" onChange={onInputChange} />
      </div>
      <button className="addCaseButton" onClick={() => showCaseModal()}>Add Case</button>
      <div className="inputPaneBody">
        {_.map(caseList.map((entry={}) => (<div>
          {entry.input}
          {entry.type}
          {entry.expectation}
        </div>)))}
      </div>
      <button className="generateTrigger" onClick={generateTests}>
        Generate Tests
      </button>
    </div>)
  }
}