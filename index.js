require('dotenv').load()

const express = require('express')
const app = express()
const port = process.env.PORT || 3200
const path = require('path')

app.use(express.static(path.join(__dirname, '/')))

app.listen(port, () => {
  console.info('Server is listening on port:', port)
})

// app.get('/', (req, res) => {
//   res.send()
// })
