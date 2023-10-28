const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const News = require('./model/NewsSchema');
const mongoose = require('mongoose');
const news_operations = require('./methods/news_operations');
require('dotenv').config();
const bodyParser = require('body-parser')

mongoose.set("strictQuery", false);

const mongoDB = process.env.MONGODB_URI;

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

app.get('/admin', news_operations.allNews);
app.get('/', news_operations.allNewsHome);
app.get('/news/:id', news_operations.getNews);
app.post('/create-news',news_operations.create_News_post);
app.post('/delete/:id',news_operations.delete_news);
app.get('/edit/:id', news_operations.edit_news_get);
app.post('/edit/:id', news_operations.edit_News_post);

app.post('/login', (req, res, next) => {
  if(req.body.password === process.env.PASSWORD){
    res.status(200).json({ message: 'Login successful' });
  } else {
    console.log(req.body.password)
    res.status(401).json({ message: 'Login failed: Incorrect password' });
  }
})


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});