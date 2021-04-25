const express = require('express');
const util = require('./db');

const categoryRouter = express.Router();

categoryRouter.post('/createCategory', (req, res, next) => {
    const catName = req.query.catName;
    const spendLimit = req.query.spendLimit;
    const newCat = util.createCategory(catName, spendLimit);
    res.status(201).send(newCat);
});

categoryRouter.post('/createLog', (req, res, next) => {
    const catName = req.query.catName;
    const spendName = req.query.spendName;
    const spend = req.query.spend;
    const spendObject = util.createSLog(catName, spendName, spend);
    res.status(201).send(spendObject);
});

categoryRouter.get('/viewCategories', (req, res, next) => {
    const categories = util.getCategories();
    res.status(200).send(categories);
});

categoryRouter.get('/viewCategoy', (req, res, next) => {
    const catName = req.query.catName;
    const category = util.getCategory(catName);
    res.status(200).send(category);
});

module.exports = categoryRouter;