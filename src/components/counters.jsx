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

        {this.state.counters.map(c => {
          return <Counter key={c.id} value={c.value} />;
        })}
      </div>
    );
  }
}

export default Counters;
