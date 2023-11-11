import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";
import "./CreateNews.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useParams, useNavigate } from "react-router-dom";

function CreateNews() {
  const { id } = useParams();
  const navigate = useNavigate();

  const initialFormData = {
    heading: "",
    author: "",
    article: "",
    subheading: "",
    img_url: "",
    img_pos: "",
    category: [],
  };

  const [formData, setFormData] = useState(initialFormData);
  const [ allcategories, setallCategories ] = useState([]);
  const [loggedin, setLoggedin] = useState(false);

  useEffect(()=>{
    authorise();
  }, [])

  const authorise =() => {
    const loggedin = localStorage.getItem("loggedin");
    if(loggedin == "true"){
      setLoggedin(true);
    }
  }
  async function getData(id) {
    try {
      const res = await axios.get(`http://localhost:3000/edit/${id}`);
      const data = {
        heading: res.data.heading,
        author: res.data.author,
        article: res.data.article,
        subheading: res.data.subheading,
        img_url: res.data.img.src,
        img_pos: res.data.img.position,
        category: res.data.category,
      };
      setFormData(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  async function getCats(){
    try 
      { const res = await axios.get('http://localhost:3000/categories')
        console.log(res)
        setallCategories(res.data);
    } catch(error) {
      console.log('Error fetching categories')
    }
  }
  useEffect(() => {
    getCats();
    if (id !== undefined) {
      getData(id);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]); // Add 'id' as a dependency

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleChangeQuill = useCallback((value) => {
    setFormData((prevData) => ({
      ...prevData,
      article: value,
    }));
  }, []);

  const handleCategoryChange = (event) => {
    const { value, checked } = event.target;
    setFormData((prevState) => {
      if (checked) {
        return {
          ...prevState,
          category: [...prevState.category, value],
        };
      } else {
        return {
          ...prevState,
          category: prevState.category.filter((e) => e !== value),
        };
      }
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const url = id
      ? `http://localhost:3000/edit/${id}`
      : "http://localhost:3000/create-news";

    axios
      .post(url, formData)
      .then((response) => {
        if (response.status === 200) {
          console.log("Changes saved");
          navigate("/"); // Redirect to the admin page after saving changes
        } else if (response.status === 500) {
          // Handle server errors
        }
      })
      .catch((error) => {
        console.error(error);
        // Handle errors
      });
  };
  console.log(formData.img_pos)
  return (
    loggedin?
    <section className="bg-slate-200">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="font-normal text-center text-xl md:text-4xl">
          Edit News
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="title"
                className="block mb-2 text-base font-medium text-gray-900"
              >
                Title:
              </label>
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
              <label
                htmlFor="subhead"
                className="text-base block mb-2 text-sm font-medium text-gray-900"
              >
                Subheading:
              </label>
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
            <div style={{ "marginLeft": "-28.5vw", "height": "55vh", "width": "100vw", "backgroundImage": `url(${formData.img_url})`, "backgroundSize": "cover", "backgroundPosition": formData.img_pos }}>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="img_pos">Position:</label>
              <input
                type="text"
                name="img_pos"
                id="img_pos"
                placeholder="Image Position"
                value={formData.img_pos}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="author"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Author:
              </label>
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
              <label className="block mb-2 text-base font-medium text-gray-900">
                Category:
              </label>
              <div>
                  <label className="block mb-2 text-base font-medium text-gray-900">
                    Category:
                  </label>
                  {allcategories.map((category) => (
                    <label key={category._id} className="block text-sm font-medium text-gray-900">
                      <input
                        type="checkbox"
                        name="category"
                        value={category._id}
                        checked={formData.category.includes(category._id)}
                        onChange={handleCategoryChange}
                      />
                      {category.title}
                    </label>
                  ))}
                  </div>
            </div>

            <div className="sm:col-span-2 h-5/6">
              <label
                htmlFor="article"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Article:
              </label>
              <ReactQuill
                name="article"
                className="md:text-xl"
                id="article"
                theme="snow"
                value={formData.article}
                onChange={handleChangeQuill} // Use the optimized callback
              />
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-black bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 hover.bg-primary-800"
          >
            Save Changes
          </button>
        </form>
      </div>
    </section>
    : <div>Not logged in </div>
  );
}

export default CreateNews;
