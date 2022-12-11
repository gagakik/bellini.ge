import React, {useState, useEffect} from 'react';
import '../style/gallery.css'
import Animation from '../components/animation'
import SanityClient from '../components/client'

const Gallery = () => {
    const [gallery, setGallery] = useState(null);

	useEffect(() => {
		SanityClient
		  .fetch(`*[_type == "gallery"] {
			mainImage {
			  asset-> {
				_id,
				url
			  },
			  alt
			}
		  }`)
		  .then((data) => setGallery(data))
		  .catch(console.error)
	  }, []);
    return (
        <Animation>
        <div className='container'>
            <div className='gallery'>
            { gallery && gallery.map((gallery, index) => (
	          <div key={index} className='photo'>
              <img src={gallery.mainImage.asset.url} alt={gallery.mainImage.asset.alt} />
              </div>
          ))}
            </div>
        </div>
        </Animation>
    );
}

export default Gallery;
