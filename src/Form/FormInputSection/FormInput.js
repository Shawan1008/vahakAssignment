import React, { useState ,useEffect, useRef } from 'react'
import IndianRupee from '../../IndianRupee.svg'
import PriceButtons from '../PriceButtons/PriceButtons'
import './FormInputStyle.css'
const FormInput = () => {
    const [ inputvalue, setValue ] = useState()
    const [ btnstatus, setBtnstatus ] = useState(true)
    const [ width, setWidth ] = useState(50)
    

    const valueLength = 0

    const [ state, setState ] = useState(valueLength)
    const WidthChange = event => {

        setState((prevState)=>({
            ...state,
            newstate: prevState.valueLength,
            valueLength : event.target.value.length
        }))

        if ( state.newstate < state.valueLength ) {
            setWidth(width+30)
        }
        else if(state.newstate > state.valueLength ) {
            setWidth(width-30)
        }
        // else if(state.valuelength=300) {
        //     setWidth(300)
        // }
        let currentWidth=event.target.value.length
        if(currentWidth==0) {
            setBtnstatus(true)
        }
        else {
            setBtnstatus(false)
        }
    }

    
    return(
        <div className='forminput'>
            <div className="priceinput">
                <div className="formHeadtitle">
                    <h2>Place your Load Bid</h2>
                    <span></span>
                </div>
                <div className="formbody">
                    <img src={IndianRupee} alt="IndianRupee"/>
                    <input
                        style={{width:`${width}px`}}
                        placeholder='0'
                        value={inputvalue}
                        onChange={WidthChange}
                    />
                </div>
            </div>
            <div className="buttons">
                <PriceButtons btnstatus={btnstatus}/>
            </div>
        </div>
    )
}
export default FormInput