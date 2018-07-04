import React, { Component } from 'react'
import axios from 'axios'
import Edit from './edit'

export default class Food extends Component {
  constructor(){
    super()
    this.state = {
      foodArr:  [],
      newFood: '',
    }


    this.getFood = this.getFood.bind(this)
    this.addToFood = this.addToFood.bind(this)
    this.delete = this.delete.bind(this)
    this.update = this.update.bind(this)
  }
  componentDidMount(){
    this.getFood()
  }

  getFood(){
    axios.get('/api/getFood')
      .then( res => {
        this.setState({
          foodArr: res.data
        })
      })
  }

  addToFood(){
    let food = {
      type: this.state.newFood
    }
    axios.post('/api/addFood', food)
      .then( res => {
        console.log(res.data)
        this.setState({
          foodArr: [...this.state.foodArr, res.data],
          newFood: ''
        })
      })
  }

  handleChange(key, val){
    this.setState({
      [key]: val
    })
  }

  delete(id){
    axios.delete(`/api/delete/${id}`)
      .then( res => {
        this.setState({
          foodArr: res.data
        })
      })
  }

  update(id){
    axios.put(`/api/update/${id}`)
      .then( res => {
        console.log(res)
      })
  }


  render() {
    let arr = this.state.foodArr.map( (e,i) => {
      return (
        <div className='food' key={i}>
          <li><Edit editable={this.state[`food${e.id}`]}/></li><span className="delete" onClick={() => this.delete(e.id) }>x</span>
        </div>
    )})

    return (
      <div>
      <h1>Here is the Food app state:</h1>
        <div className='list-container'>
          <div className='list'>
          {arr}
          </div>
          <div className='input-div'>
            <input className="input" value={this.state.newFood} type="text" placeholder="add some food!" onChange={(e) => this.handleChange('newFood', e.target.value)}/>
            <input className="submit"type="submit" onClick={this.addToFood} submit="Add food"/>
          </div>
        </div>
      </div>
    )
  }
}