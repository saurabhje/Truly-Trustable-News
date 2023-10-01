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

const news1 = new News({
  heading: "This is the story about How Modi won 2019 loksabha election,a tale of Polarization and Developement",
  author: "Your mom",
  article: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,",
}).save();


app.use(cors());
app.get('/:id', async(req, res) => {
  const a = await News.findById(req.params.id);
  if(!a){
    res.send("Hi");
  }
  const news = {
    heading: a.heading,
    author: a.author,
    article: a.article,
  }
  res.json(news);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});