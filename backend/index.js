const express = require('express')
const app = express()
const cors = require('cors')
const {db} = require("./db/db")
const router = require('./router/router.js');

const port = 3000

require('dotenv').config()


app.get('/', (req, res) => {
  res.send('say hello world')
})

app.use(express.json())
app.use(cors())
app.use(router)

db()
//connect http://localhost:3000/
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})