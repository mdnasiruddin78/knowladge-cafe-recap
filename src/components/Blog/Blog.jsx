import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    const {title} = blog
    return (
        <div>
            <h3 className='text-4xl'>{title}</h3>
        </div>
    );
};

Blog.prototype = {
    blog: PropTypes.object.isRequired
}

export default Blog;