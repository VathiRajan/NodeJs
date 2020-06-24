const express = require('express');
const http = require('http');
const morgan = require('morgan');
const hostname = 'localhost'
const port = 3000;
const app = express();
app.use(morgan('dev'));//Morgan is used for logs
app.use(express.static(__dirname + '/public')); //used for serving stating html pages 
app.use((req, res, next) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an express JS </h1></body></html>')

});
const server = http.createServer(app);
server.listen(port, hostname, () => {
    console.log("server started running at localhost")
});