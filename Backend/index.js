const express = require('express');
const app = express();
const port = 3000;
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


app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;