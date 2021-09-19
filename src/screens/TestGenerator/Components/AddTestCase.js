import React, { Component } from "react";

export default class AddTestCase extends Component {
  render = () => {
    return <div className="addCaseModal">
      <div className="addCaseModalHeader">
        <h3>Add Test Case</h3>
        <div className="spacer" />
        <span className="closeButton">

        </span>
      </div>
      <div className="addCaseModalBody">
        <input name="functionInput" />
        <input name="expectedOutput" />
      </div>
      <div className="addCaseModalFooter">
        
      </div>
    </div>
  }
}
  