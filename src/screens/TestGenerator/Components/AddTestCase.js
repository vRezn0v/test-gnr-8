import _ from "lodash";
import React, { Component } from "react";
import { ASSERTION_TYPES } from "../../../utils/enums";

export default class AddTestCase extends Component {
  state = {
    input: "",
    expectation: "",
    type: "eq"
  }

  onChange = (event) => this.setState({ [event.target.name]: event.target.value })

  render = () => {
    return <div className="addCaseModal">
      <div className="addCaseModalHeader">
        <h3 className="modalHeading">Add Test Case</h3>
        <div className="spacer" />
        <span
          className="closeButton"
          onClick={this.props.closeModal}>
          &times;
        </span>
      </div>
      <div className="addCaseModalBody">
        <input name="input"
          className="textInput"
          placeholder="Input"
          onChange={this.onChange} />
        <select
          name="type"
          className="textInput"
          onChange={this.onChange}>
          {_.map(ASSERTION_TYPES, entry => (
            <option value={entry.value}>
              {entry.name}
            </option>)
          )}
        </select>
        <input
          name="expectation"
          className="textInput"
          placeholder="Expected Output"
          onChange={this.onChange} />
      </div>
      <div className="addCaseModalFooter">
        <button
          className="cancelButton"
          onClick={this.props.closeModal}
        >Cancel</button>
        <button
          className="addCaseButton"
          onClick={() => this.props.addTestCase(this.state)}>
          Add Test Case
        </button>
      </div>
    </div>
  }
}