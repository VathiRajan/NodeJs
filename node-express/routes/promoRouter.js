const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.urlencoded({ extended: true }));
promoRouter.route('/')

    //Sometimes we may make mistakes while defining end points like /promo / dishes.

    //Hence router allows to have a common end point. 

    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();

    }) //There is no semicolon as all end points enclosed in single router

    .get((req, res, next) => {
        res.end('Will send all the promotions to you');

    })//There is no semicolon as all end points enclosed in single router

    .post((req, res, next) => {
        res.end('Will add the promotion: promoion name: ' + req.body.name +
            ' promotion detail : ' + req.body.description);

    })//There is no semicolon as all end points enclosed in single router

    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /promotions');

    })//There is no semicolon as all end points enclosed in single router

    .delete((req, res, next) => {
        res.end('Deleting all prmotions');
    });


promoRouter.route('/:promoId')
    .get((req, res, next) => {
        res.end('Geting the promotions for the id : ' + req.params.promoId);
    })

    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /promotions/' + req.params.promoId);
    })

    .put((req, res, next) => {
        res.statusCode = 200;
        res.end('updating the promotion : ' + req.params.promoId + '\n' +
            'Will update the promotion ' + req.params.promoId + ' details' + + req.params.description);
    })

    .delete((req, res, next) => {
        res.end('Deleting the promotion ' + + req.params.promoId);
    });
module.exports = promoRouter;