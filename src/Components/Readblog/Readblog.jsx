import React from 'react';
import './Readblog.css';

const Readblog = (props) => {
     const {blog} = props;
     let ReadTime = 0;

     for(const b of blog){
        ReadTime = ReadTime + parseInt(b.Read_time);
     }
    return (
        <div className='blog-read'>
             <h2>Blogs </h2>
            <div className='time'>
                <h3>Spent Time on Read: {ReadTime} min</h3>
            </div>
        </div>
    );
};

export default Readblog;