import React, { Component } from "react";

class Counter extends Component {
  render() {
    const { onIncrement, counter, onDelete } = this.props;

    return (
      <div>
        <span style={{ fontSize: 14 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          className="btn btn-secondary btn-md m-2"
          onClick={() => {
            onIncrement(counter);
          }}
        >
          +
        </button>
        <button
          className="btn btn-md m-2 btn-danger"
          onClick={() => {
            onDelete(counter.id);
          }}
        >
          x
        </button>
      </div>
    );
  }

  formatCount() {
    const { value } = this.props.counter;
    return value == 0 ? "Zero" : value;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value == 0 ? "warning" : "primary";
    return classes;
  }

  handleReset = () => {
    this.setState({ value: 0 });
  };
}

export default Counter;
