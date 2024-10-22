import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa6";


const Blog = ({blog,hendleAddToBookmark,hendleMarkAsRead}) => {

    const {title,id,cover,author_img,author,posted_date,reading_time,hashtags} = blog

    return (
        <div className='space-y-3'>
            <img src={cover} alt=""/>
            <div className='flex gap-3 justify-between items-center'>
                <div className='flex space-x-2'>
                    <img className='w-12' src={author_img} 
                    alt={`cover picture of the title ${title}`} />
                <div>
                    <h3 className='font-bold'>{author}</h3>
                    <p className='text-gray-500'>{posted_date}</p>
                </div>
                </div>
                <div className='flex'>
                    <p className='text-gray-500'>{reading_time} min read</p>
                    <button onClick={()=>hendleAddToBookmark(blog)} className='text-green-500'>
                        <FaBookmark /></button>
                </div>
            </div>
            <h3 className='text-4xl'>{title}</h3>
            <p>
                {
                    hashtags.map((has , idx) => <span className='text-[#5aa7ff]'
                    key={idx}><a href=''>{has}</a></span>)
                }
            </p>
            <button onClick={() => hendleMarkAsRead(id,reading_time)} className=
            'text-blue-700 underline font-bold'>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    hendleAddToBookmark: PropTypes.func,
    hendleMarkAsRead: PropTypes.func
}

export default Blog;
