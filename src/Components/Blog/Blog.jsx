import React from 'react';
import './Blog.css';

const Blog = (props) => {
    const {id,Author_img,Author_name,Blog_title,Blog_cover,Read_time,Publish} = props.blog;
    const markRead = props.markRead;
    return (
        <div className='blog'>
            <img className='blog-img' src={Blog_cover} alt="blog cover image" />
            <div className='blog-info'>
                <div className='author'>
                <div className='author-img'>
                    <img src={Author_img} alt="author image"  />
                </div>
                <div className='author-info'>
                    <h2>{Author_name}</h2>
                    <p><small>{Publish}</small></p>
                </div>
                </div>
                <div className='blog-read'>
                    <p>{Read_time} min read</p>
                </div>

            </div>
            <div className='blog-content'>
                 <h1>{Blog_title}</h1>
            <p className='hash'> #Crazy-Science</p>
            </div>
           
            <button  onClick={()=> markRead(props.blog)} className='mark-btn'>Mark As Read</button>

        </div>
    );
};

export default Blog;