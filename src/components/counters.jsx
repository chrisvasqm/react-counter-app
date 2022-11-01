import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement, onDecrement } =
      this.props;

    return (
      <div>
        <button className="btn btn-primary btn-md m-2" onClick={onReset}>
          Reset
        </button>

        {counters.map(counter => {
          return (
            <Counter
              key={counter.id}
              counter={counter}
              onDelete={onDelete}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
            />
          );
        })}
      </div>
    );
  }
}

export default Counters;
