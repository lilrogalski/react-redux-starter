const express = require('express')
const http = require('http')
const socketIo = require('socket.io')

// Port from environment variable or default - 4001
const port = process.env.PORT || 4001

// Setting up express and adding socketIo middleware
const app = express()
const server = http.createServer(app)
const io = socketIo(server)

const mockData = require('./mockData.json')
const endpoint = require('./src/lib/constants.js').endpoint

const socket = require('socket.io-client')(endpoint)

// starting timer at 0
let counter = 3
const duration = 1000

// simple solution to emitting order events from mockData
// the counter goes up every 1s, if order.sent_at_second matches duration we send it to the browser via socket.io
setInterval(() => {
  counter += 1

  // if sent_at_second is current counter, emit order event
  const currentOrder = mockData.filter(
    order => order.sent_at_second === counter,
  )

  socket.emit('new order', currentOrder)
}, duration)

// set up a socket with the namespace "connection" for new sockets
io.on('connection', socket => {
  console.log('New client connected')

  // isten on a namespace called "new order"
  socket.on('new order', data => {
    // broadcast out to all other sockets except the socket which sent us the data
    socket.broadcast.emit('outgoing data', { data })
  })

  // A special namespace "disconnect" for when a client disconnects
  socket.on('disconnect', () =>
    console.log('Client disconnected'),
  )
})

server.listen(port, () =>
  console.log(`Listening on port ${port}`),
)
