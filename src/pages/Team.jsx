import React from 'react';
import Employee from '../components/Employee'
import '../style/team.css'
import Animation from '../components/animation'

const Team = () => {
    
    return (
        <Animation>
        <div className='container'>
            <div className='team'>
            <Employee/>
            </div>
        </div>
        </Animation>
    );
}

export default Team;
