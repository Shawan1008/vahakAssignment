import React, { useState } from 'react'
import UserDetails from '../UserDetails/UserDetails';
import './PriceButtonsStyle.css'
const PriceButtons = (props) => {
    const [state,setState] = useState({shown:true});
 
    return(
        <div className="PriceButtonsContainer">
            <div className="pricebuttonwrapper">
                <div className="fixpricebtn">
                    <button onClick={()=>setState({ shown:!state.shown})} className="Fixed Price" disabled={props.btnstatus}>
                        {state.shown ? <div>Fixed Price</div> : <div>Fixed Price</div>}
                    </button>
                </div>
                <div className="negotiablebtn">
                    <button onClick={()=>setState({ shown:!state.shown})} className="Rate Negiotable" disabled={props.btnstatus}>
                        {state.shown ? <div>Rate Negiotable</div> : <div>Rate Negiotable</div>}
                    </button>
                </div>

            </div>
            <div className='buttonstyle'>
                {state.shown ? <div></div> 
                :   <UserDetails/> }
            </div>
        </div>
    )
}
export default PriceButtons