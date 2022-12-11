import React, {useEffect, useState} from 'react';
import Animation from '../components/animation'
import '../style/blog.css'
import SanityClient from '../components/client'

const Blog = () => {
    const [blog, setBlog] = useState(null);

	useEffect(() => {
		SanityClient
		  .fetch(`*[_type == "blog"] {
			title,
      description,
            price,
			mainImage {
			  asset-> {
				_id,
				url
			  },
			  alt
			}
		  }`)
		  .then((data) => setBlog(data))
		  .catch(console.error)
	  }, []);
    return (
        <Animation>
        <div className='container'>
            <div className='blog'>
            { blog && blog.map((blog, index) => (
	          <div key={index} className='blog-intro'>
              <img src={blog.mainImage.asset.url} alt={blog.mainImage.asset.alt} />
              <div className='blog-name'>
                <h3 className='blog-title'>{blog.title}</h3>
                 <p className='blog-text'>{blog.description}</p>
              </div>
            </div>
          ))}
            </div>
        </div>
        </Animation>
    );
}

export default Blog;
