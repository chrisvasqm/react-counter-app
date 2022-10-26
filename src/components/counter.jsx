import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: 0,
  };
  render() {
    return (
      <main className="container">
        <h1>Counter</h1>

        <span style={{ fontSize: 14 }} className={this.renderBadge()}>
          {this.formatCount()}
        </span>
        <button
          className="btn btn-secondary btn-md m-2"
          onClick={this.handleIncrement}
        >
          Increment
        </button>
      </main>
    );
  }

  formatCount() {
    const { value } = this.state;
    return value == 0 ? "Zero" : value;
  }

  renderBadge() {
    let classes = "badge m-2 badge-";
    classes += this.state.value == 0 ? "warning" : "primary";
    return classes;
  }

  handleIncrement = () => {
    const value = this.state.value + 1;
    this.setState({ value });
  };
}

export default Counter;
