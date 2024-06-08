import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Counter extends Component {
  style = {
    fontSize: 30,
  };
  // constructor(){
  //   super();
  //   this.handleIncrement=this.handleIncrement.bind(this);
  render() {
    return (
      <div>
        <span style={this.style} className={this.getBadge()}>
          {this.formatCount()}
        </span>
        <button
          onClick={()=>this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          increment
        </button>
        <button className="btn btn-danger m-2 btn-sm" onClick={()=>this.props.onDelete(this.props.counter.id)}>Delete</button>
      </div>
    );
  }
  getBadge() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}
export default Counter;