import React, {useEffect, useState} from 'react';
import SanityClient from '../components/client'
import '../style/cards.css'
import Animation from '../components/animation'

const Pricing = () => {
    const [postData, setPost] = useState(null);

	useEffect(() => {
		SanityClient
		  .fetch(`*[_type == "cards"] {
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
		  .then((data) => setPost(data))
		  .catch(console.error)
	  }, []);
    return (
      <Animation>
        <div className='container'>
          <div className='cards'>
            { postData && postData.map((post, index) => (
	          <div key={index} className='card'>
              <img src={post.mainImage.asset.url} alt={post.mainImage.asset.alt} />
              <div className='detals'>
                <h3 className='title'>{post.title}</h3>
                <h4 className='price'>{post.price}</h4>
                 <p className='anotation'>{post.description}</p>
              </div>
            </div>
          ))}
          </div>
        </div>
        </Animation>
    );
}

export default Pricing;
