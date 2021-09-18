import React, { Component } from "react";

export default class InputPane extends Component {
  
  render = () => {
    const { onInputChange, generateTests, showCaseModal } = this.props;

    return (<div className="generatorInputPane">
      <div className="inputPaneHeader">
        <input name="methodName" className="textInput" placeholder="Method Name" onChange={onInputChange} />
        <input name="functionDescription" className="textInput grow" placeholder="Description (optional)" onChange={onInputChange} />
        <input name="defaultReturn" className="textInput" placeholder="Default Output (optional)" onChange={onInputChange} />
      </div>
      <button className="addCaseButton" onClick={showCaseModal}>Add Case</button>
      <div className="inputPaneBody">

      </div>
      <button className="generateTrigger" onClick={generateTests}>
        Generate Tests
      </button>
    </div>)
  }
}