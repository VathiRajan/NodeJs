const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.urlencoded({ extended: true }));
dishRouter.route('/')

    //Sometimes we may make mistakes while defining end points like /dish / dishes.

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


dishRouter.route('/:dishId')
    .get((req, res, next) => {
        res.end('Get resquest end point');
    })

    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /dishes/:Id');
    })

    .put((req, res, next) => {
        res.statusCode = 200;
        res.write('updating the dish : ' + req.params.dishId);
    })

    .delete((req, res, next) => {
        res.statusCode = 200;
        res.end('Deleting all dishes');
    });

module.exports = dishRouter;