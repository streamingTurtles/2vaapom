const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.send('hello STREAMING TURTLES');
});

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});

