const path = require('path')
const express = require('express')
const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/records', require('./api'))

app.listen(PORT, () => console.log(`listening on port http://localhost:PORT`))
