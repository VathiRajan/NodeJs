const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.urlencoded({ extended: true }));
leaderRouter.route('/')

    //Sometimes we may make mistakes while defining end points like /promo / dishes.

    //Hence router allows to have a common end point. 

    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();

    }) //There is no semicolon as all end points enclosed in single router

    .get((req, res, next) => {
        res.end('Get resquest end point');

    })//There is no semicolon as all end points enclosed in single router

    .post((req, res, next) => {
        res.end('Post method - dish name' + req.body.name +
            ' body description ' + req.body.description);

    })//There is no semicolon as all end points enclosed in single router

    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /dishes');

    })//There is no semicolon as all end points enclosed in single router

    .delete((req, res, next) => {
        res.statusCode = 200;
        res.end('Deleting all dishes');
    });


leaderRouter.route('/:leaderId')
    .get((req, res, next) => {
        res.end('Get resquest end point');
    })

    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /leader/:Id');
    })

    .put((req, res, next) => {
        res.statusCode = 200;
        res.write('updating the dish : ' + req.params.leaderId);
    })

    .delete((req, res, next) => {
        res.statusCode = 200;
        res.end('Deleting all dishes');
    });
module.exports = leaderRouter;