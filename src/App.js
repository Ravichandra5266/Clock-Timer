import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state = {
    isShowClock: false,
  }

  onClickToggleClock = () => {
    this.setState(prevState => {
      const {isShowClock} = prevState
      return {
        isShowClock: !isShowClock,
      }
    })
  }

  render() {
    const {isShowClock} = this.state
    return (
      <div className="app-container">
        <button
          type="button"
          className="toggle-button"
          onClick={this.onClickToggleClock}
        >
          {isShowClock ? 'Hide Clock' : 'Show Clock'}
        </button>
        {isShowClock && <Clock date="2020-12-12" />}
      </div>
    )
  }
}

export default App
