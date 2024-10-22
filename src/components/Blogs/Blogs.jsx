import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";


const blogs = ({hendleAddToBookmark}) => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className="md:w-2/3">
           <h3 className="text-3xl font-bold">Blogs: {blogs.length}</h3>
           {
                blogs.map(blog => <Blog hendleAddToBookmark={hendleAddToBookmark} 
                     key={blog.id} blog={blog}></Blog>)
           } 
        </div>
    );
};

export default blogs;