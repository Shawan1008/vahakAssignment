import React from 'react'

const PriceButtons = (props) => {
 
    return(
        <div className="PriceButtonsContainer">
            <button className="Fixed Price" disabled={props.btnstatus}>Fixed Price</button>
            <button className="Rate Negiotable" disabled={props.btnstatus}>Rate Negiotable</button>
        </div>
    )
}
export default PriceButtons