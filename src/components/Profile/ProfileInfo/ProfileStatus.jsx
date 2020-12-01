import React, { Component } from "react";

export default class ProfileStatus extends Component {
  state = {
    editMode: false,
  };

  activateEditMode = () => {
    this.setState({ editMode: true });
  };

  deactivateEditMode = () => {
    this.setState({ editMode: false });
    // this.props.updateStatus
  };

  render() {
    return (
      <>
        {this.state.editMode ? (
          <div>
            <input
              type="text"
              value={this.props.status}
              onBlur={this.deactivateEditMode}
              autoFocus
            />
          </div>
        ) : (
          <div>
            <span onDoubleClick={this.activateEditMode}>
              {this.props.status}
            </span>
          </div>
        )}
      </>
    );
  }
}
