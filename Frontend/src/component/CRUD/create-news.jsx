import axios from 'axios';
import React, { useState } from 'react';
import "./create-news.css"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Create_news() {
  const [formData, setFormData] = useState({
    heading: "",
    author: "",
    article: "",
    subheading: "",
    img_url: "",
  });


  
  const [articleContent, setArticleContent] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    formData.article = articleContent;
    axios.post('http://localhost:3000/create-news', formData)
    .then((response) => {
      if (response.status === 200) {
          console.log("saved");
      } else if (response.status === 500) {
        window.location.href = "/";
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900">Add a new News Article</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 ">Title : </label>
              <input type="text" name="heading" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Title of the news" required onChange={handleChange} />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="subhead" className="block mb-2 text-sm font-medium text-gray-900 ">Subheading : </label>
              <input type="text" name="subheading" id="subhead" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="subheading" required onChange={handleChange} />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="img_url">Img : </label>
              <input type="text" name="img_url" id="img_url" placeholder="Img Url" required onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 ">Author : </label>
              <select
                id="category"
                name="author"
                value={formData.author}
                onChange={handleChange}
              >
                <option value="">Select an author</option>
                <option value="Je">Je</option>
                <option value="XuNigger">XuNigger</option>
            </select>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="article" className="block mb-2 text-sm font-medium text-gray-900 ">Article : </label>
              <ReactQuill id="article" theme="snow" value={articleContent} onChange={setArticleContent} />
            </div>
          </div>
          <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-black bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-primary-800">
            Add Article
          </button>
        </form>
      </div>
    </section>
  );
}

export default Create_news;
