/* eslint react/prop-types: 0 */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef} from "react";
import "./main-content.css";
import { Link } from "react-router-dom";
import axios from "axios";
const baseurl = import.meta.env.VITE_BASE_URL;

const MainContent = ({content, sidebar_content}) => {
  const [data, setData] = useState(content);
  const [sidebardata] = useState(sidebar_content)
  const [mobileView, setMobileView] = useState();
  let page = useRef(1);
  const cat = useRef()
  const loading = useRef(false)
  const catData = ['Science', 'Sports', 'Lifestyle', 'Politics', 'Education', 'Opinion and Editorials', 'Business and Finance', 'Education']

  const handleLoadMore = () => {
    loading.current = true
    page.current++;
    console.log(page.current)
    const link = cat.current?`${baseurl}/?page=${page.current}&cat=${cat.current}`: `${baseurl}/?page=${page.current}`;
    axios
      .get(link)
      .then((response) => {
        setData((prevNews) => [...prevNews, ...response.data]);
        loading.current = false
        console.log(link)
      })
  };

  const handleResize = () => {
    if (window.innerWidth < 1080) {
      setMobileView(true);
    } else {
      setMobileView(false);
    }
  };

  const handleCatchange = (e) =>{
    loading.current = true
    setData([])
    page.current = 1;
    cat.current = (e.target.value);
    const link = `${baseurl}/?page=${page.current}&cat=${cat.current}`
    axios
      .get(link)
      .then((response) => {
        loading.current = false
        setData((prevNews) => [...prevNews, ...response.data]);
      })
  }

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  return (
    <div className="main">
      <div className="content-wrap">
        <div className="select">
          <h2>Sort News By categories</h2>
          <select  onChange={handleCatchange}> 
              <option value="">All</option>
              {catData.map((e, index) => (
                <option key={index} value={e}>{e}</option>
              ))}
            </select>
        </div>
        <div className="content">
          {data.map((e, index) => {
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
                      {e.category ? (
                        e.category.map((cat) => (
                          <span className='px-1 text-sky' key={cat._id}>{cat.title}</span>
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
            {loading.current ? (
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
          {sidebardata.map((e, index) => {
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
