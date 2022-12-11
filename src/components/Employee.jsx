import React, {useEffect, useState} from 'react';
import '../style/employee.css'
import SanityClient from '../components/client'

const Employee = () => {
    const [teams, setTeams] = useState(null);

	useEffect(() => {
		SanityClient
		  .fetch(`*[_type == "teams"] {
			title,
      description,
      position,
			mainImage {
			  asset-> {
				_id,
				url
			  },
			  alt
			}
		  }`)
		  .then((data) => setTeams(data))
		  .catch(console.error)
	  }, []);
    return (
        <div className='employees'>
            { teams && teams.map((teams, index) => (
        <div className='employee' key={index}>
        <img src={teams.mainImage.asset.url} alt={teams.mainImage.asset.alt} />
        <div className='person'>
            <p className='employee-name'>{teams.title}</p>
            <p className='employee-post'>{teams.position}</p>
            <p className='employee-about'>{teams.description}</p>
        </div>
    </div>
          ))}

        </div>
    );
}

export default Employee;
