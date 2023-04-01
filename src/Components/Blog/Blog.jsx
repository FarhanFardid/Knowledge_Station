import React from 'react';
import './Blog.css';

const Blog = (props) => {
    const {id,Author_img,Author_name,Blog_title,Blog_cover,Read_time,Publish} = props.blog;
    return (
        <div className='blog'>
            <img className='blog-img' src={Blog_cover} alt="blog cover image" />
            <div className='blog-info'>
                <div className='author-img'>
                    <img src={Author_img} alt="author image"  />
                </div>
            </div>
        </div>
    );
};

export default Blog;