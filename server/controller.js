let id = 0
let foodArr = [
  {
    type: 'pizza',
    id: id++
  },
  {
    type: 'spaghetti',
    id: id++
  },
  {
    type: 'fish',
    id: id++
  }
]

module.exports = {
  getFood: (req, res) => {
    res.status(200).send(foodArr)
  },

  addFood: (req, res ) => {
    console.log('body', req.body)
    let {type} = req.body
    let foodItem = {
      type: type,
      id: id++
    }
    console.log('food', foodItem);
    foodArr.push(foodItem)
    res.status(201).send(foodItem)
  }, 
  update: (req, res) => {
    
  }, 
  delete: (req, res) => {
    const { id } = req.params
    let index = foodArr.findIndex( e => e.id == id)
    foodArr.splice(index,1)
    console.log(index);
    res.status(200).send(foodArr)
  }
}