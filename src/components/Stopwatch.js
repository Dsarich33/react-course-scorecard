import React, { Component } from "react";

export class Stopwatch extends Component {
  state = {
    elapsedTime: 0,
    isRunning: false,
    previousTime: 0
  };
  handleStopWatch = () => {
    this.setState(prevState => ({
      isRunning: !prevState.isRunning
    }));
    if (!this.state.isRunning) {
      this.setState({ previousTime: Date.now() });
    }
  };

  componentDidMount() {
    this.intervalId = setInterval(() => this.tick(), 100);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  resetTime = () => {
    this.setState({
      elapsedTime: 0
    });
  };
  tick = () => {
    if (this.state.isRunning) {
      const now = Date.now();
      this.setState(prevState => ({
        previousTime: now,
        elapsedTime: prevState.elapsedTime + (now - prevState.previousTime)
      }));
    }
  };
  render() {
    const { isRunning, elapsedTime } = this.state;
    const seconds = Math.floor(elapsedTime / 1000);
    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">{seconds}</span>
        <button onClick={this.handleStopWatch}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button onClick={this.resetTime}>Reset</button>
      </div>
    );
  }
}

export default Stopwatch;
