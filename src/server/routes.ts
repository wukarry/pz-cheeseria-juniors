import * as express from 'express';
// import * as _ from "lodash";
// const fs = require('fs');
const cheeses = require('./data/cheeses.json');
const history = require('./data/history.json');

const router = express.Router();

router.get('/api/cheeses', (req, res, next) => {

    res.json(cheeses);
});

router.get('/api/history', (req, res, next) => {

    res.json(history);
});

export default router;