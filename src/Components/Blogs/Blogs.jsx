import React, { useEffect, useState } from 'react';
import Blogging from '../Blogging/Blogging';

import Readblog from '../Readblog/Readblog';
import './Blogs.css';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [blog, setBlog] = useState([]);
    const[bookmarks, setBookmarks] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))

    },[]);

    const markRead=(readBlog) =>{
     let newBlog = [...blog, readBlog];
     setBlog(newBlog);
    }

    const bookMark=(bookmark) =>{
        let newBookmark = [...bookmarks, bookmark];
        setBookmarks(newBookmark);
        console.log(bookmark);
    }
    return (
        <div className="blogs">
            <div className='blog-container'> 
            {
              
                blogs.map(blog=> <Blogging
                     blog={blog}
                      key={blog.id}
                      markRead={markRead}
                      bookMark={bookMark}>

                      </Blogging>)
            }

            </div>
            <div className='blog-summary'>
           
            <Readblog blog={blog}  bookmarks={bookmarks}></Readblog>
            </div>
        </div>
    );
};

export default Blogs;