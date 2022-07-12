//require("./modules/path");
//require("./modules/fs");
//require("./modules/http");
//const {Pessoa} = require("./pessoa");
//const pessoa = new Pessoa('PedroJr');
//require("./modules/express");


const dotenv = require('dotenv');
const connectToDatabase = require('./database/connect');


dotenv.config();

connectToDatabase();



