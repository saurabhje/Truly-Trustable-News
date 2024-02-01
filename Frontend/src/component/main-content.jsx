/* eslint-disable react-hooks/exhaustive-deps */
/* eslint react/prop-types: 0 */

import React, { useState, useEffect } from "react";
// import axios from "axios";
import "./main-content.css";
import { Link } from "react-router-dom";
// const baseurl = import.meta.env.VITE_BASE_URL;


const MainContent = ({content, sidebar_content, cat_content}) => {
  // const [data, setData] = useState([]);
  // const [sidebardata, setSidebardata] = useState([])
  const [mobileView, setMobileView] = useState();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [cat, setCat] = useState();
  // const [catdata, setCatdata] = useState([])
  // const [error, setError] = useState('');
  setTimeout(()=>{
    console.log(content)
  }, 5000)
  const fetchInfo = async() => {
    setLoading(true);
    // const link = cat? `${baseurl}/?page=${page}&cat=${cat}`: `${baseurl}/?page=${page}`
    // axios
    //   .get(link)
    //   .then((response) => {
    //     setData((prevNews) => [...prevNews, ...response.data]);
    //     setLoading(false);
    //   })
    //   .catch((error) => {
    //     setError("Error fetching data:", error);
    //   });
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleResize = () => {
    if (window.innerWidth < 1080) {
      setMobileView(true);
    } else {
      setMobileView(false);
    }
  };

  const handleCatchange = (e) =>{
    setCat(e.target.value)
    setPage(1);
    // setData([]);
  }

  useEffect(() => {
    fetchInfo();
  }, [page, cat]);

  useEffect(() => {
    // const sidebarlink = `${baseurl}/sidebar`;
    // axios
    //   .get(sidebarlink)
    //   .then((response) => {
    //     setSidebardata((prevNews) => [...prevNews, ...response.data]);
    //   })
    //   .catch((error) => {
    //     setError("Error fetching sidebar data:", error);
    //   });
    // axios
    // .get(`${baseurl}/categories`)
    // .then((response) => {
    //   setCatdata(response.data)
    // })
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  return (
    <div className="main">
    {/* {error && <p>{error}</p>} */}
      <div className="content-wrap">
        <div className="select">
          <h2>Sort News By categories</h2>
          <select onChange={handleCatchange}> 
              <option value="">All</option>
              {cat_content && cat_content.map((e, index) => (
                <option key={index} value={e.title}>{e.title}</option>
              ))}
            </select>
        </div>
        <div className="content">
          {content && content.map((e, index) => {
            const itemWrapClass = index % 2 === 0 ? "itemwrap1" : "itemwrap2";
            return (
              <Link to={`/news/${e.slug}`} className="item" key={index}>
                <div className={itemWrapClass}>
                    <div className="gradient">
                    <img id="img" src={e.img.src} alt="News Image" />
                    </div>
                    <div className="heading-p">
                    <hr />
                    <h2>{e.heading}</h2>
                    <p>
                      {e.subheading}
                    </p>
                    <div className="catog">
                      Categories:
                      {/* {e.category ? (
                        e.category.map((cat) => (
                          <span className='px-1 text-sky' key={cat._id}>{cat.title}</span>
                        ))
                      ) : (
                        <span>No categories available</span>
                      )} */}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
          <div className="loading-wrap">
            {loading ? (
              <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            ) : (
              <button id="loadmore" onClick={handleLoadMore}>
                Load More
              </button>
            )}
          </div>
        </div>
      </div>
      {!mobileView && (
        <div className="sidebar ">
          {sidebar_content && sidebar_content.map((e, index) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <Link 
                to={`/news/${e.slug}`}
                className="news_card"
                key={index}
                state={{ id: e._id }}
              >
                <img
                  className="w-full h-auto"
                  id="side_img"
                  src={e.img.src}
                  alt="News Image"
                />
                <p>{e.heading}</p>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MainContent;
