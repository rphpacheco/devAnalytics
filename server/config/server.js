const   port = 8081,
        bodyParser = require('body-parser'),
        express = require('express'),
        server = express()

const allowCors = require('./cors')
const queryParser = require('express-query-int')

server.use(bodyParser.urlencoded({ extended : true }))
server.use(bodyParser.json())
server.use(allowCors)
server.use(queryParser())

server.listen(port, function() {
    console.log(`SERVER-DEVANALYTICS is running in port ${port}`)
})

module.exports = server