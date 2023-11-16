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
  const [allcategories, setallCategories] = useState([]);
  const [loggedin, setLoggedin] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("password")) {
      authorise();
    }
  }, []);

  const authorise = async () => {
    axios
      .post(
        "https://truly-trustable-news-s52o.vercel.app/login",
        {
          password: sessionStorage.getItem("password"),
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      )
      .then((response) => {
        if (response.status === 200) {
          setLoggedin(true);
        } else {
          navigate("/login");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  async function getData(id) {
    try {
      const res = await axios.get(`https://truly-trustable-news-s52o.vercel.app/edit/${id}`);
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
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  async function getCats() {
    try {
      const res = await axios.get("https://truly-trustable-news-s52o.vercel.app/categories");
      console.log(res);
      setallCategories(res.data);
    } catch (error) {
      console.log("Error fetching categories");
    }
  }
  useEffect(() => {
    getCats();
    if (id !== undefined) {
      getData(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

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
      ? `https://truly-trustable-news-s52o.vercel.app/edit/${id}`
      : "https://truly-trustable-news-s52o.vercel.app/create-news";

    axios
      .post(url, formData)
      .then((response) => {
        if (response.status === 200) {
          console.log("Changes saved");
          navigate("/");
        } else if (response.status === 500) {
          // Handle server errors
        }
      })
      .catch((error) => {
        console.error(error);
        // Handle errors
      });
  };
  return loggedin ? (
    <div>
      <h2 className="font-normal text-center text-xl md:text-4xl">Edit News</h2>
      <form className="newsform" onSubmit={handleSubmit}>
        <div className="formData">
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              name="heading"
              id="title"
              placeholder="Title of the news"
              required
              value={formData.heading}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="subhead">Subheading:</label>
            <input
              type="text"
              name="subheading"
              id="subhead"
              placeholder="Subheading"
              required
              value={formData.subheading}
              onChange={handleChange}
            />
          </div>
          <div>
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
          <div
            style={{
              height: "55vh",
              width: "100vw",
              backgroundImage: `url(${formData.img_url})`,
              backgroundSize: "cover",
              backgroundPosition: formData.img_pos,
            }}
          ></div>
          <div>
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
            <label htmlFor="author">Author:</label>
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
            <label>Category:</label>
            {allcategories.map((category) => (
              <label key={category._id}>
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

          <div>
            <label
              htmlFor="article"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Article:
            </label>
            <ReactQuill
              name="article"
              id="article"
              theme="snow"
              value={formData.article}
              onChange={handleChangeQuill}
            />
          </div>
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  ) : (
    <div>
      <p>
        Not Logged in, Login Rn{" "}
        <button onClick={() => navigate("/reallybreh12")}>Login</button>
      </p>
    </div>
  );
}

export default CreateNews;
