/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

export default function SideBar({ sidebardata }) {
    return (
        <div className="sidebar">
            {sidebardata && sidebardata.map((e, index) => (
                <Link
                    to={`news/${e.slug}`}
                    className="news_card"
                    key={index}
                    state={{ id: e._id }}
                >
                    <img
                        src={e.img.src}
                        alt={e.slug}
                        id="side_img"
                        className="w-full h-auto"
                    />
                    <p>{e.heading}</p>
                </Link>
            ))}
        </div>
    );
}
