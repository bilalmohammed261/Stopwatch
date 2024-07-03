// Write your code here
import {Component} from 'react'

import './index.css'

const initialState = {
  isTimerRunning: false,
  timeElapsedInSeconds: 0,
}

class Stopwatch extends Component {
  state = initialState

  componentWillUnmount() {
    this.clearTimerInterval()
  }

  getElapsedSecondsInTimeFormat = () => {
    const {timeElapsedInSeconds} = this.state

    const minutes = Math.floor(timeElapsedInSeconds / 60)
    const seconds = Math.floor(timeElapsedInSeconds % 60)
    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`
    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }

  incrementTimeElapsedInSeconds = () => {
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    }))
  }

  clearTimerInterval = () => {
    clearInterval(this.intervalId)
  }

  startStopWatch = () => {
    const {isTimerRunning} = this.state
    if (!isTimerRunning) {
      this.intervalId = setInterval(this.incrementTimeElapsedInSeconds, 1000)
    }
    this.setState(prevState => ({isTimerRunning: !prevState.isTimerRunning}))
  }

  stoptStopWatch = () => {
    this.clearTimerInterval()
    this.setState(prevState => ({isTimerRunning: !prevState.isTimerRunning}))
  }

  resetStopWatch = () => {
    this.clearTimerInterval()
    this.setState(initialState)
  }

  render() {
    return (
      <div className="stopwatch-container">
        <h1>Stopwatch</h1>
        <div className="timer-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
            alt="stopwatch"
          />
          <h1>{this.getElapsedSecondsInTimeFormat()}</h1>
          <div className="buttons-container">
            <button type="button" onClick={this.startStopWatch}>
              Start
            </button>
            <button type="button" onClick={this.stoptStopWatch}>
              Stop
            </button>
            <button type="button" onClick={this.resetStopWatch}>
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
