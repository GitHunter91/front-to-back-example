import React, { Component } from 'react'
import axios from 'axios'

export default class Food extends Component {
  constructor(){
    super()
    this.state = {
      foodArr:  []
    }
    this.getFood = this.getFood.bind(this)
  }
componentDidMount(){
  this.getFood()
}
  getFood(){
    axios.get('/giraffe')
      .then( res => {
        this.setState({
          foodArr: res.data
        })
      })
  }

  render() {
    let arr = this.state.foodArr.map( (e,i) => {
      return <li key={i}>{e.type}</li>
    })
    return (
      <div>
      <h1>Here is the Food app state:</h1>
        {arr}
      </div>
    )
  }
}