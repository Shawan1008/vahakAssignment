import React, { useState } from 'react'
import More from '../Images/More.svg'
import MoreUp from '../Images/MoreUp.svg'
import './MoreDetailsStyle.css'
const MoreDetails = () => {
    const [state,setState] = useState({shown:true});
    return(
        <div className="moredetailscontainer">
            <div className='buttonstyle'>{state.shown ? <div></div> : <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>}</div>
            <div className='hideseeFunc' 
                onClick={()=>setState({ shown:!state.shown})}>
                    {state.shown ? <div style={{backgroundColor:'#2355FC0F',padding:'6px',color:'#194DFF',fontSize:'12px'}}>More Details<img src={More} alt="More Details"/>
                    </div> : <div style={{backgroundColor:'#2355FC0F',color:'#194DFF',fontSize:'12px'}}>Hide Details<img src={MoreUp} alt="Hide Details"/></div>}</div>
        </div>
    )
}
export default MoreDetails