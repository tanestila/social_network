import React, { Component } from "react";

export default class ProfileStatus extends Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({ status: this.props.status });
    }
  }

  activateEditMode = () => {
    this.setState({ editMode: true });
  };

  deactivateEditMode = () => {
    this.setState({ editMode: false });
    this.props.updateStatus(this.state.status);
  };

  onChangeStatus = (e) => {
    this.setState({ status: e.currentTarget.value });
  };

  render() {
    return (
      <>
        {this.state.editMode ? (
          <div>
            <input
              type="text"
              value={this.state.status}
              onBlur={this.deactivateEditMode}
              onChange={this.onChangeStatus}
              autoFocus
            />
          </div>
        ) : (
          <div>
            <span onDoubleClick={this.activateEditMode}>
              {this.props.status || "Set new status"}
            </span>
          </div>
        )}
      </>
    );
  }
}
