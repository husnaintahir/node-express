const express = require('express');
var path = require('path');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();


app.use(express.static(path.join(__dirname)));


app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 1000000 }));


app.get("/", function (req, res) {
    res.send({ "Hello": "Welcome to test project" })
});



// express doesn't consider not found 404 as an error so we need to handle 404 explicitly
// handle 404 error
app.use(function (req, res, next) {
    let err = new Error('Not Found');
    // err.status = 404;
    // next(err);
    res.redirect('/')
});


// db.connection.on('error', console.error.bind(console, 'MongoDB connetction error'));

app.listen(process.env.PORT || 4000, function () {
    console.log(`Node server is running in ${process.env.NODE_ENV} on port ${process.env.PORT || 4000}`);
});