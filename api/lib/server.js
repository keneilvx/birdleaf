const http = require('http')
const url = require ('url')
const config = require('./config')

//create server object
let server = {}

// create http server
server = http.createServer(function (req, res){

})

//initialize server instance
server.init = function () {

    server.listen( config.http.port, function () {
        console.log('Port listening on ', config.http.port )
    })


}

//export server object
module.exports = server