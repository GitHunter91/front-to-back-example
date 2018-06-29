const express = require('express')
const bodyParser = require('body-parser')
const controller = require('./controller')


const app = express()
app.use(bodyParser.json())



app.get('/giraffe', controller.getFood)



const PORT = 4000
app.listen( PORT, () => {
  console.log(`listening on ${PORT}`)
})

