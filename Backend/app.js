const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const News = require('./model/NewsSchema');
const mongoose = require('mongoose');

require('dotenv').config();

mongoose.set("strictQuery", false);

const mongoDB = process.env.MONGODB_URI;

main().catch((err)=> console.log(err));
async function main(){
  await mongoose.connect(mongoDB);
}

app.use(cors());
app.get('/:id', async(req, res) => {
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
  console.log(a);
  res.json(a);

})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});