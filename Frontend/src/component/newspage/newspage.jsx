import React from "react";
import Navbar from "../navbar/navbar";
import Footer from "../footer";
import "./newspage.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
const baseurl = import.meta.env.VITE_BASE_URL;

const Newspage = () => {
  const [data, setData] = useState([]);
  const { slug } = useParams();
  useEffect(() => {
    axios
      .get(`${baseurl}/news/${slug}`)
      .then((response) => {
        setData(response.data[0]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setData(null);
      });
  });

  const renderHtmlContent = (html) => {
    return { __html: html };
  };

  if (!data) {
    throw new Error("Data not found");
  }
  return (
    <>
      <Helmet>
        <title>{data.heading}</title>
        <meta name="description" content={data.heading} />
      </Helmet>
      <div
        className="header"
        style={{
          backgroundImage: data.img ? `url(${data.img.src})` : "",
          backgroundPosition: data.img ? `${data.img.position}` : "center",
        }}
      >
        <Navbar />
      </div>
      <div className="newsbody">
        <div className="news-hero-text">
          <h1>{data.heading}</h1>
          <p className="subheading">{data.subheading}</p>
          <p>
            <em>{data.author}</em>
          </p>
        </div>
        <div className="categories justify-start">
          Category:
          {data.category &&
            data.category.map((cat) => (
              <p
                className="inline-block m-2 flex-start text-sky category-link"
                key={cat._id}
              >
                {cat.title}
              </p>
            ))}
        </div>
        <div
          className="articles"
          dangerouslySetInnerHTML={renderHtmlContent(data.article)}
        />
      </div>
      <Footer />
    </>
  );
};

export default Newspage;
