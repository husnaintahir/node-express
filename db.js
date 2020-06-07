const mongoose = require('mongoose');


const { db_host, db_password, db_user } = require('./config');

const MONGO_USERNAME = db_user;
const MONGO_PASSWORD = db_password;
const MONGO_HOSTNAME = db_host;
const MONGO_PORT = '27017';


const MONGO_DB = 'lofo';
// const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;



const MONGO_URL = `mongodb://${MONGO_HOSTNAME}/${MONGO_DB}?authSource=admin`;

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    auth: {
        user: MONGO_USERNAME,
        password: MONGO_PASSWORD
    }
}).then(() => {
    console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});


module.exports = mongoose;