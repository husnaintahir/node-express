const mongoose = require('mongoose');


const MONGO_USERNAME = 'husnain';
const MONGO_PASSWORD = '123';
const MONGO_HOSTNAME = '192.168.1.200';
const MONGO_PORT = '27017';
// const MONGO_PORT = '35182';
const MONGO_DB = 'sharkinfo';


const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;


mongoose.connect(url, { useNewUrlParser: true }).then(() => {
    console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});


module.exports = mongoose;