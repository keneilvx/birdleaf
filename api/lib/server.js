const http = require('http')
const url = require ('url')
const config = require('./config')

//create server object
let server = {}

// create http server
server = http.createServer(function (req, res){

    // parse the url
    let parsedUrl = url.parse(req.url, true)

    let pathname = parsedUrl.pathname


    // trim said path
    let trimmed_path = pathname.replace(/^\/+|\/+$/g, '')

    //Get the HTTP method of the request

    let method = req.method.toLowerCase()

    //assign the header information to a variable
    let headers = req.headers
})

//initialize server instance
server.init = function () {

    server.listen( config.http.port, function () {
        console.log('Port listening on ', config.http.port )
    })


}

//export server object
module.exports = server