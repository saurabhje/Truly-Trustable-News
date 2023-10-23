import axios from 'axios';
import React, { useState } from 'react';
import "./CreateNews.css"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function CreateNews() {
  const [formData, setFormData] = useState({
    heading: "",
    author: "",
    article: "",
    subheading: "",
    img_url: "",
    category: "",
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
      <h2 className='font-normal text-center text-xl md:text-4xl '>Add News</h2>  
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label htmlFor="title" className=" block mb-2 text-base font-medium text-gray-900 ">Title : </label>
              <input type="text" name="heading" id="title" className="md:text-base bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Title of the news" required onChange={handleChange} />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="subhead" className="text-base block mb-2 text-sm font-medium text-gray-900 ">Subheading : </label>
              <input type="text" name="subheading" id="subhead" className=" md:text-base bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="subheading" required onChange={handleChange} />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="img_url">Img : </label>
              <input type="text" name="img_url" id="img_url" placeholder="Img Url" required onChange={handleChange} />
            </div>
            <div>
              <div>
                  <label htmlFor="author" className="block mb-2 text-sm font-medium text-gray-900 ">Author : </label>
                  <select
                    id="author"
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                  >
                    <option value="">Select an author</option>
                    <option value="Je">Je</option>
                    <option value="XuNigger">XuNigger</option>
                  </select>
              </div>
              <div>
                  <label htmlFor="category" className="block mb-2 text-base font-medium text-gray-900 ">Category : </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                  >
                      <option value="">Select Cat</option>
                      <option value="Cat1">Je</option>
                      <option value="cat2">cat</option>
                      <option value="cat3">catt</option>
                      <option value="cat4">cattt</option>
                      <option value="cat5">catttt</option>
                      <option value="cat6">cattttt</option>
                    </select>
              </div>
            </div>

            <div className="sm:col-span-2 h-5/6">
              <label htmlFor="article" className="block mb-2 text-sm font-medium text-gray-900 ">Article : </label>
              <ReactQuill className='md:text-xl' id="article" theme="snow" value={articleContent} onChange={setArticleContent} />
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

export default CreateNews;
