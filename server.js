const express = require('express');
const app = express();

const categoryRouter = require('./server/categoryRouter');

// Add middware for parsing request bodies here:
app.use(express.json());

const PORT = 4001;

app.get('', (req, res, next) => {
    console.log('Listening');
});

app.use('', categoryRouter);

app.listen(PORT);
