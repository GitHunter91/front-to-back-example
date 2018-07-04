import React, { Component } from 'react'
import Food from './components/Food'
import Button from './components/Button'
// import image from './assets/flashlightface.jpg'

class App extends Component {
  constructor(){
    super()
    this.state = {
      info: 'this is Apps state',
      lights: false
    }
    this.lightSwitch = this.lightSwitch.bind(this)
  }

  lightSwitch(){
    this.setState({
      lights: !this.state.lights
    })
  }

  render() {

    return (
      <div className="App">
      <h1>{this.state.info}</h1>
      <div className='food-container'>
        <Food />
      </div>
      <Button action={this.lightSwitch} />
      {!this.state.lights ? <div className='blacked'></div> : <img className="image" src={require('./assets/flashlightface.jpg')} alt="face"/>}
      </div>
    )
  }
}

export default App
