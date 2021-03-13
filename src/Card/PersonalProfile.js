import React from 'react'
import ProfileTop from '../Images/drawable-mdpi/ProfileTop.png';
import './ProfileStyle.css'
const PersonalProfile = () => {
    return(
        <div className="profileConatiner">
            <div className="profileimage">
                <img src={ProfileTop} alt='profile'/>
            </div>
            <div className='profiledetails'>
                <h3>Rohan Sharma</h3>
                <h4>Bengaluru, Karnataka</h4>
            </div>
        </div>
    )
}
export default PersonalProfile