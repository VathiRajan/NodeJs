const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const hostname = 'localhost'
const port = 3000;
const app = express();
const dishRouter = require('./routes/dishRouter');
const leaderRouter = require('./routes/leaderRouter');
const promoRouter = require('./routes/promoRouter');


//app.use() - to include all the middle wares

//app.all() - to define common response  too all end points.

//app.get()/post() - include pani override the respnse code 

//app.end() - to send to send to server


app.use(morgan('dev'));//Morgan is used for logs

//bodyParser is used the parse the body of the  message. 
//Body parser will pasre and will parse in the request
app.use(bodyParser.json());


//Mounting the Router
app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);
app.use('/leader', leaderRouter);



/*

// Has been moved to Router

app.all('/dishes', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
});

app.get('/dishes', (req, res, next) => {
    res.end('Get resquest end point');
})

app.post('/dishes', (req, res, next) => {
    res.end('Post method - dish name' + req.body.name + ' body description ' + req.body.description);
})

app.put('/dishes', (req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes');
})

app.delete('/dishes', (req, res, next) => {
    res.statusCode = 200;
    res.end('Deleting all dishes');
})

//

app.get('/dishes/:dishId', (req, res, next) => {
    res.end('Get resquest end point');
})

app.post('/dishes/:dishId', (req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes');
})

app.put('/dishes/:dishId', (req, res, next) => {
    res.statusCode = 200;
    res.write('updating the dish : ' + req.params.dishId);
})

app.delete('/dishes/:dishId', (req, res, next) => {
    res.statusCode = 200;
    res.end('Deleting all dishes');
})

*/
app.use(express.static(__dirname + '/public')); //used for serving static html pages 

app.use((req, res, next) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an express JS static page </h1></body></html>')

});

const server = http.createServer(app);
server.listen(port, hostname, () => {
    console.log("server started running at localhost:3000")
});