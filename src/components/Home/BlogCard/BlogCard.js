import React from 'react';
import './BlogCard.css';
const BlogCard = ({blog}) => {
    return (
        <div className="col-md-4 blog-container">
           <div className="blog-content">
                <div>
                    <img src={blog.img} alt="" />
                </div>
                <div>
                    <div className="semi-content">
                        <h6>{blog.name}</h6>
                        <p>{blog.date}</p>
                    </div>
                    <h5>{blog.title}</h5>
                    <p>{blog.description}</p>
                    <button className="sign-btn">→</button>
                </div>
           </div>
        </div>
    );
};

export default BlogCard;