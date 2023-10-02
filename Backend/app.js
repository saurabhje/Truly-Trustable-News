const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const News = require('./model/NewsSchema')
const mongoose = require("mongoose");

// Set up mongoose connection
mongoose.set("strictQuery", false);

const URI = "mongodb+srv://user:K31q7BiUfWpJ8lH4@cluster0.onc69sw.mongodb.net/?retryWrites=true&w=majority"; 

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(URI);
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