import React from 'react'
import Path25988 from '../Path25988.svg'
import payment from '../payment.svg'
import Group15945 from '../Group15945.svg'
import './SpecificationsStyle.css'
const Specifications = () => {

    return (
        <div className="cardcontainer">
            <div className="carDetails">
                <h2>Honda City</h2>
                <h4>Posted at 1 Nov, 9.30 AM</h4>
            </div>
            <div className="Specifications">
                <div className="spec1">
                    <img src={Group15945} alt='Path'/>
                    <h3>Specification 01</h3>
                </div>
                <div className="spec2">
                    <img src={Path25988} alt='payment'/>
                    <h3>Specification 02</h3>
                </div>
                <div className="spec3">
                    <img src={payment} alt='group'/>
                    <h3>Specification 03</h3>
                </div>
            </div>
        </div>
    )
}
export default Specifications