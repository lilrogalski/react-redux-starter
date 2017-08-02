const express = require('express')
const path = require('path')

const app = express()

const isProduction = process.env.NODE_ENV === 'production'
const port = isProduction ? process.env.PORT : 3000
const publicPath = path.resolve(__dirname, '..','build')

// We point to our static assets
app.use(express.static(publicPath))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'))
})

// And run the server
app.listen(port, () => console.log('Server running on port ' + port))
