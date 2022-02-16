const http = require('http')
const url = require ('url')
const config = require('./config')


    let server = {}

server = http.createServer(function (req, res){

})


server.init = function () {

    server.listen( config.http.port, function () {
        console.log('Port listening on ', config.http.port )
    })


}

module.exports = server