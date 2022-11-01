import React, { Component } from "react";

class Counter extends Component {
  render() {
    const { onIncrement, counter, onDelete, onDecrement } = this.props;

    return (
      <div className="row">
        <div className="col-1">
          <span style={{ fontSize: 14 }} className={this.getBadgeClasses()}>
            {this.formatCount()}
          </span>
        </div>
        <div className="col-2">
          <button
            className="btn btn-secondary btn-md"
            onClick={() => {
              onIncrement(counter);
            }}
          >
            +
          </button>
          <button
            className="btn btn-secondary btn md m-2"
            disabled={this.isDisabled(counter)}
            onClick={() => {
              onDecrement(counter);
            }}
          >
            -
          </button>
          <button
            className="btn btn-md btn-danger"
            onClick={() => {
              onDelete(counter.id);
            }}
          >
            x
          </button>
        </div>
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

  isDisabled(counter) {
    return counter.value === 0;
  }
}

export default Counter;
