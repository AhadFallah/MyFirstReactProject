import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 3 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
    ],
  };
  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id != counterId);
    this.setState({ counters });
  };
  handleIncrement = (counter) => {
    const index = this.state.counters.indexOf(counter);
    this.state.counters[index].value++;
    this.setState(this.state.counters);
  };
  handleReset=()=>{
    this.state.counters.map(counter=>counter.value=0);
    this.setState(this.state.counters);

  }
  render() {
    return (
      <div>
        <button className="btn btn-sm btn-primary m-2" onClick={this.handleReset}>reset</button>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
