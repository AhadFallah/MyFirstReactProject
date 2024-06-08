import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Counter extends Component {
  state = {
    count: this.props.counter.value,
  };
  style = {
    fontSize: 30,
  };
  // constructor(){
  //   super();
  //   this.handleIncrement=this.handleIncrement.bind(this);
  // }
  handleIncrement = () => {
  this.setState({count:this.state.count+1})
  
  };

  render() {
    return (
      <div>
        <span style={this.style} className={this.getBadge()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
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
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}
export default Counter;