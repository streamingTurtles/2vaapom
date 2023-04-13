const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;

const requestTime = function (req, res, next) {
    req.requestTime = Date.now()
    next()
  }
app.use(requestTime);



app.get('/', (req, res) => {
    let responseText = 'WE are the STREAMING TURTLES <br>'
    responseText += `and the current time is now ${req.requestTime}`
    console.log(responseText);
    res.send(responseText);
    // res.send('<p>some html</p>')
});

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});

