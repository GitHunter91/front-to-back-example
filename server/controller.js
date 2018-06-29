
let foodArr = [
  {
    type: 'pizza',
    id: 0
  },
  {
    type: 'spaghetti',
    id: 1
  },
  {
    type: 'fish',
    id: 2
  }
]

module.exports = {
  getFood: (req, res) => {
    res.status(200).send(foodArr)
  }
}