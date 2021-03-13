import React from 'react'
import MoreDetails from './MoreDetails'
import PersonalProfile from './PersonalProfile'
import Specifications from './Specifications'

const Card = () => {
    return (
        <div className=" CardContainer">
            <Specifications/>
            <MoreDetails/>
            <PersonalProfile/>
        </div>
    )
}
export default Card