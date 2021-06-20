import * as express from 'express';
// import * as _ from "lodash";

const cheeses = require('./data/cheeses.json');
const history = require('./data/history.json');

const router = express.Router();

router.get('/api/cheeses', (req, res, next) => {

    return res.json(cheeses);
});

router.get('/api/history', (req, res, next) => {

    return res.json(history);
});

router.post('/api/history', (req, res, next) => {

    let fs = require('fs');
    let history = JSON.stringify(req.body);
    fs.writeFile("src/server/data/purchases.json", history, (err: any) => {
        if(err) throw err;
        console.log('success');
    });
    return res.json(history);
});

export default router;