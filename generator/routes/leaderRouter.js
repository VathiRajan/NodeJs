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
        res.end('Get all the leaders');

    })//There is no semicolon as all end points enclosed in single router

    .post((req, res, next) => {
        res.end('Post method - leader name' + req.body.name +
            ' leader description ' + req.body.description);

    })//There is no semicolon as all end points enclosed in single router

    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /leaders');

    })//There is no semicolon as all end points enclosed in single router

    .delete((req, res, next) => {
        res.end('Deleting all leaders');
    });


leaderRouter.route('/:leaderId')
    .get((req, res, next) => {
        res.end('Getting all the leaders for the leader id ' + req.params.leaderId);
    })

    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /leader/:' + req.params.leaderId);
    })

    .put((req, res, next) => {
        res.statusCode = 200;
        res.end('updating the leaders : ' + req.params.leaderId + '\n' +
            'Will update the leader ' + req.params.name + ' details' + req.params.description);
    })

    .delete((req, res, next) => {
        res.end('Deleting the leader ' + req.params.leaderId);
    });
module.exports = leaderRouter;