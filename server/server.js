const express = require('express')
const bodyParser = require('body-parser')
const controller = require('./controller')


const app = express()
app.use(bodyParser.json())



app.get('/api/getFood', controller.getFood)
app.put('/api/update/:id', controller.update)
app.post('/api/addFood', controller.addFood)
app.delete('/api/delete/:id', controller.delete)



const PORT = 4000
app.listen( PORT, () => {
  console.log(`listening on ${PORT}`)
})

