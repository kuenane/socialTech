const http = require('http')
const app = require('./app')

//port at which the env run
const port = process.env.PORT || 5000
//create server
const server = http.createServer(app)
//start server
server.listen(port, function() {
    console.log('running server at ' + port)
})