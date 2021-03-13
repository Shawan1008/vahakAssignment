import React, { useState } from 'react'
import IndianRupee from '../../IndianRupee.svg'
import PriceButtons from '../PriceButtons/PriceButtons'
import './FormInputStyle.css'
const FormInput = () => {
    const [ inputvalue, setValue ] = useState()
    const [ width, setWidth ] = useState(320)
    const [ btnstatus, setBtnstatus ] = useState(true)

    const WidthChange = event => {
        let currentWidth = event.target.value.length
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
            <img src={IndianRupee} alt="IndianRupee"/>
            {/* <input onChange={WidthChange} value={inputvalue} width={width} type="text" id="fname" name="fname"/> */}
            <input
                placeholder='0'
                paddingHorizontal='8px'
                value={inputvalue}
                onChange={WidthChange}
                width={inputvalue ? `${width}px` : `10px`}
            />
            </div>
            <div className="buttons">
                <PriceButtons btnstatus={btnstatus}/>
            </div>
        </div>
    )
}
export default FormInput