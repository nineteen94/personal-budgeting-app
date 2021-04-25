const express = require('express');
const app = express();

// Add middware for parsing request bodies here:
app.use(express.json());

const PORT = 4001;

app.get('', (req, res, next) => {
    console.log('Here we are!');
});

app.listen(PORT);
