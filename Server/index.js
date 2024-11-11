const express = require("express");
const cors = require("cors");
// import db connection
const dbConnection = require("./connection/db")
// import router
const router = require("./router/router")
require('dotenv').config()
const app = express();
app.use(cors());

app.use(router)


let PATH =  process.env.PORT || 3344;
let server =app.listen(PATH, ()=>{
    dbConnection();
    console.log(`Marketplace server listening at http://localhost:${PATH}`);
})
process.on('unhandledRejection', error => {
    console.log(error.message);
    server.close(() => process.exit(1));
});