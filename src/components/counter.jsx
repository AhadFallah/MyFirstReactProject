import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

export default class Counter extends Component {
  state = { 
    count: 0,
  };
  style={
    fontSize:30
  }
  render() {
    return (
      <div>
        <span style={this.style} className="badge badge-primary m-2">{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm m-2">increment</button>
      </div>
    );
  }
  formatCount(){
    const {count}= this.state;
    return count===0?"Zero" :count;
  }
}
