import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
    ],
  };

  render() {
    return (
      <div>
        <h1>Counters</h1>

        {this.state.counters.map(counter => {
          return (
            <Counter
              key={counter.id}
              value={counter.value}
              onDelete={() => {
                this.handleDelete(counter.id);
              }}
            />
          );
        })}
      </div>
    );
  }

  handleDelete = id => {
    console.log(`Event handler called ${id}`);
    const counters = this.state.counters.filter(counter => counter.id !== id);
    this.setState({ counters });
  };
}

export default Counters;
