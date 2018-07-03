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
    // console.log(req.body)
    let {type} = req.body
    let foodItem = {
      type: type,
      id: id++
    }
    foodArr.push(foodItem)
    res.status(201).send(foodItem)
  }
}