import React, { Component } from "react";
import toast from "react-hot-toast";

export default class OutputPane extends Component {
  state = {
    generatedCases: ""
  }

  componentDidMount = () => {
    const { generatedCases = "" } = this.props;

    this.setState({ generatedCases })
  }

  onChangeHandler = e => {
    this.setState({ generatedCases: e.target.value })
  }

  copyToClipboard = () => {
    const { generatedCases } = this.state;
    navigator.clipboard.writeText(generatedCases);
    toast("Test Cases Copied to Clipboard");
  }

  render = () => {
    const { generatedCases } = this.state;

    return (<div className="generatorOutputPane">
      <div className="outputPaneHeader">
        <button className="copyCases" onClick={this.copyToClipboard}>Copy</button>
      </div>

      <textarea className="outputPaneBody" value={generatedCases} onChange={this.onChangeHandler}>
        
      </textarea>
    </div>)
  }
}