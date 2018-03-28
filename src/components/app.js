import React from "react";
import IncrementButton from "./increment-button";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  _onChange = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <div className="parent">
        <div className="count">Number of clicks: {this.state.count}</div>
        <IncrementButton onClick={this._onChange} />
      </div>
    );
  }
}
// <button onClick={this._onChange}>Increment</button>
