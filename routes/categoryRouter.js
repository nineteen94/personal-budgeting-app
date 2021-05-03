const express = require('express');
// const util = require('../db/tempStorage');
const db = require('../db/index'); 

const categoryRouter = express.Router();

categoryRouter.post('/createCategory', (req, res, next) => {
    let category_name = req.body.category_name;
    let category_limit = req.body.category_limit;
    // const newCat = util.createCategory(catName, spendLimit);
    // res.status(201).send(newCat);
    console.log('Here');
    db.query('INSERT INTO category (name, budget, balance) VALUES ($1, $2, $3)', [category_name, category_limit, category_limit])
    .then(result => {
        res.status(201).send();
        console.log('Is Here?');
    })
    .catch(err => console.log(err));    
    console.log('Here Now');
});

categoryRouter.post('/createLog', async (req, res, next) => {
    const category_id = req.body.category_id;
    const spend_name = req.body.spend_name;
    const spend_value = req.body.spend_value;
    // const spendObject = util.createSLog(catName, spendName, spend);
    // res.status(201).send(spendObject);

    db.query('INSERT INTO spend (name, value, category_id) VALUES ($1, $2, $3)', [spend_name, spend_value, category_id])
    .then(res.status(201).send())
    .catch(err => console.log(`Caught error here2 ${err}`));

    db.query('SELECT balance FROM category WHERE id = $1 ', [category_id])
    .then(result => {
        console.log(result);
        const result_value = result.rows[0].balance;
        db.query('UPDATE category SET balance = $1 WHERE id = $2', [result_value - spend_value, category_id]);
    })
    .catch(err => console.log(`Caught Here 33 >> ${err}`));
    
});

categoryRouter.get('/viewCategories', (req, res, next) => {
    // const categories = util.getCategories();
    // res.status(200).send(categories);

    db.query('SELECT * FROM category JOIN spend ON category.id = spend.category_id')
    .then(result => res.status(200).send(result.rows))
    .catch(err => console.log(`Caught error here3 ${err}`));

});

categoryRouter.get('/body', (req, res, next) => {
    const category_id = req.body.category_id;
    // const category = util.getCategory(catName);
    // res.status(200).send(category);
    db.query('SELECT * FROM category JOIN spend ON category.id = spend.category_id WHERE category.id = $1', [category_id])
    .then(result => res.status(200).send(result.rows))
    .catch(err => console.log(`Caught error here4 ${err}`));
    
});

module.exports = categoryRouter;