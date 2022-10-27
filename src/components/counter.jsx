import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
  };

  render() {
    return (
      <div>
        <span style={{ fontSize: 14 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          className="btn btn-secondary btn-md m-2"
          onClick={this.handleIncrement}
        >
          Increment
        </button>
      </div>
    );
  }

  formatCount() {
    const { value } = this.state;
    return value == 0 ? "Zero" : value;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value == 0 ? "warning" : "primary";
    return classes;
  }

  handleIncrement = () => {
    const value = this.state.value + 1;
    this.setState({ value });
  };

  handleReset = () => {
    this.setState({ value: 0 });
  };
}

export default Counter;
