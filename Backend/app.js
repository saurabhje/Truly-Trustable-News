const express = require('express');
const app = express();
const port = 3000;
const http = require('http');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const bodyParser = require('body-parser');
const routes = require("./src/routes");

mongoose.set("strictQuery", false);

const mongoDB = process.env.MONGODB_URI;
main().catch((err)=> console.log(err));
async function main(){
  await mongoose.connect(mongoDB);
}

app.use( bodyParser.json() );  
app.use(bodyParser.urlencoded({    
  extended: true
}));
app.use(cors());
app.use(express.json());   
app.use(express.urlencoded());
app.use("/",routes);

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;