// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {
    isDarkMode: true,
  }

  onClickButton = () => {
    this.setState(prevState => ({
      isDarkMode: !prevState.isDarkMode,
    }))
  }

  render() {
    const {isDarkMode} = this.state
    const modelClassName = isDarkMode ? 'dark-mode' : 'light-mode'
    const buttonText = isDarkMode ? 'Light Mode' : 'Dark Mode'
    return (
      <div className="app-container">
        <div className={`container ${modelClassName}`}>
          <h1>Click To Change Mode</h1>
          <button type="button" className="button" onClick={this.onClickButton}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
