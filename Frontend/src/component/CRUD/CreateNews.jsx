import axios from 'axios';
import React, { useState, useEffect } from 'react';
import "./CreateNews.css"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useParams, useLocation, useNavigate} from 'react-router-dom';

function CreateNews() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // Initialize formData with an empty object
  const initialFormData = {
    heading: "",
    author: "",
    article: "",
    subheading: "",
    img_url: "",
    // categories: [],
  };

  // Initialize editData as an empty object
  const [editData, setEditData] = useState({});

  // Use a ternary operator to set formData based on the route
  const [formData, setFormData] = useState(
    location.pathname === '/createnews' ? initialFormData : editData
  );

  async function getData(id) {
    try {
      const res = await axios.get(`http://localhost:3000/edit/${id}`);
      const data = {
        heading: res.data.heading,
        author: res.data.author,
        article: res.data.article,
        subheading: res.data.subheading,
        img_url: res.data.img,
      };
      console.log('Fetched data:', data);
      setEditData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  useEffect(() => {
    // Check if the route is 'edit/:id' and fetch data accordingly
    if (id != undefined) {  
      // Extract the ID from the route and fetch data
      getData(id);
    }
  }, [id]);
  
  useEffect(() => {
    // This effect will run whenever editData changes
    // Update formData when editData changes
    setFormData(editData);
    console.log(editData)
  }, [editData]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleChangeQuill = (value) => {
    setFormData({
      ...formData,
      article: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const url = id ? `http://localhost:3000/edit/${id}` : 'http://localhost:3000/create-news';
  
    axios.post(url, formData)
      .then((response) => {
        if (response.status === 200) {
          console.log("Changes saved");
          // You may want to navigate back to the news list or do something else
          navigate('/') // Redirect to the admin page after saving changes
        } else if (response.status === 500) {
          // Handle server errors
        }
      })
      .catch((error) => {
        console.error(error);
        // Handle errors
      });
  }
  

  // const categories = ["Cat1", "cat2", "cat3", "cat4", "cat5", "cat6"];

  return (
    <section className="bg-slate-200">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className='font-normal text-center text-xl md:text-4xl '>Edit News</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label htmlFor="title" className="block mb-2 text-base font-medium text-gray-900">Title:</label>
              <input
                type="text"
                name="heading"
                id="title"
                className="md:text-base bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Title of the news"
                required
                value={formData.heading}
                onChange={handleChange}
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="subhead" className="text-base block mb-2 text-sm font-medium text-gray-900">Subheading:</label>
              <input
                type="text"
                name="subheading"
                id="subhead"
                className="md:text-base bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Subheading"
                required
                value={formData.subheading}
                onChange={handleChange}
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="img_url">Img:</label>
              <input
                type="text"
                name="img_url"
                id="img_url"
                placeholder="Image URL"
                required
                value={formData.img_url}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="author" className="block mb-2 text-sm font-medium text-gray-900">Author:</label>
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
            {/* <div>
              <label className="block mb-2 text-base font-medium text-gray-900">Category:</label>
              {categories.map((category) => (
                <label key={category} className="block text-sm font-medium text-gray-900">
                  <input
                    type="checkbox"
                    name="categories"
                    value={category}
                    checked={formData.categories.includes(category)}
                    onChange={handleCategoryChange}
                  />
                  {category}
                </label>
              ))}
            </div> */}
            <div className="sm:col-span-2 h-5/6">
              <label htmlFor="article" className="block mb-2 text-sm font-medium text-gray-900">Article:</label>
              <ReactQuill
                name="article"
                className='md:text-xl'
                id="article"
                theme="snow"
                value={formData.article}
                onChange={handleChangeQuill}
              />
            </div>
          </div>
          <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-black bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 hover.bg-primary-800">
            Save Changes
          </button>
        </form>
      </div>
    </section>
  );
}

export default CreateNews;
