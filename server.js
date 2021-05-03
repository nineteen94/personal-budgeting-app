const express = require('express');
const cors = require('cors');
const categoryRouter = require('./routes/categoryRouter');

const app = express();

// Add middware for parsing request bodies here:
app.use(express.json());

//Connecting via cors
app.use(cors());

const PORT = 4001;

app.get('', (req, res, next) => {
    console.log(`Listening Now on ${PORT}`);
});

app.use('', categoryRouter);

app.listen(PORT);
