import React, {useEffect, useState} from 'react';
import '../style/home.css'
import Banner from '../components/Banner';
import Animation from '../components/animation'
import SanityClient from '../components/client'

export default function Home() {
  const [home, setHome] = useState(null);

	useEffect(() => {
		SanityClient
		  .fetch(`*[_type == "home"] {
			title,
      description,
		  }`)
		  .then((data) => setHome(data))
		  .catch(console.error)
	  }, []);
  return (
    <Animation>
    <div className='container'>
      <div className='home'>
      <Banner/>
      { home && home.map((home, index) => (
	              <div key={index} className='info'>
                <h2>{home.title}</h2>
                <p>{home.description}</p>
              </div>
          ))}
</div>
    </div>
    </Animation>
  );
}
