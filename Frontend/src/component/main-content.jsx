import React, { useState, useEffect } from "react";
import axios from "axios";
import "./main-content.css";
import { Link } from "react-router-dom";

const MainContent = () => {
  const [data, setData] = useState([]);
  const [mobileView, setMobileView] = useState(false);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const fetchInfo = () => {
    setLoading(true);
    axios
      .get(`http://localhost:3000/?page=${page}`)
      .then((response) => {
        setData((prevNews) => [...prevNews, ...response.data]);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setMobileView(true);
    } else {
      setMobileView(false);
    }
  };

  useEffect(() => {
    fetchInfo();
    console.log("check");
  }, [page]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="main">
      <div className="content">
        {data.map((e, index) => {
          const itemWrapClass = index % 2 === 0 ? "itemwrap1" : "itemwrap2";
          return (
            <Link to={`/news/${e._id}`} className="item" key={index}>
              <div className={itemWrapClass}>
                <img id="img" src={e.img} alt="News Image" />
                <div className="heading-p">
                  <hr />
                  <h2>{e.heading}</h2>
                  <p>
                    {e.subheading}This is a subheading and its for fun and
                    checking things
                  </p>
                  <div>
                    Categories:
                    {e.category ? (
                      e.category.map((cat) => (
                        <span className='px-2' key={cat._id}>{cat.title}</span>
                      ))
                    ) : (
                      <span>No categories available</span>
                    )}
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

      {!mobileView && (
        <div className="sidebar ">
          {data.map((e, index) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <Link
                to={`/news/${e._id}`}
                className="news_card"
                key={index}
                state={{ id: e._id }}
              >
                <img
                  className="w-full"
                  id="side_img"
                  src={e.img}
                  alt="News Image"
                />
                <h3>{e.heading}</h3>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MainContent;
