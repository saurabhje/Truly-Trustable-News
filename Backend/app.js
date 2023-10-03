const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const News = require('./model/NewsSchema');
const mongoose = require('mongoose');

require('dotenv').config();

mongoose.set("strictQuery", false);

const mongoDB = process.env.MONGODB_URI;

const bodyParser = require('body-parser')

app.use( bodyParser.json() );  

app.use(bodyParser.urlencoded({    
  extended: true
}));

app.use(express.json());       
app.use(express.urlencoded());

main().catch((err)=> console.log(err));
async function main(){
  await mongoose.connect(mongoDB);
}

app.use(cors());
app.get('/news/:id', async(req, res) => {
  try {
    const a = await News.findById(req.params.id);
    if (!a) {
      return res.status(404).json({ message: "News not found" });
    }
    const news = {
      heading: a.heading,
      author: a.author,
      article: a.article,
      date: a.date,
      hero: a.hero
    }
    
    res.json(news);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get('/', async(req, res) => {
  const a = await News.find();
  res.json(a);

})

app.post('/login', (req, res, next) => {
  if(req.body.password == process.env.PASSWORD){
    res.status(200).json({ message: 'Login successful' });
  } else {
    console.log(req.body.password)
    res.status(401).json({ message: 'Login failed: Incorrect password' });
  }
})

app.get('/tests', (req, res) => {
  console.log(res);
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});