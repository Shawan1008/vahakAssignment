import React from 'react'
import FormInput from './FormInputSection/FormInput'
import './Form.css'
import PriceButtons from './PriceButtons/PriceButtons'
const Form = () => {
    
    return(
        <div className='FormContainer'>
            <h2>Place Your BID</h2>
            <span></span>
            <FormInput/>
            {/* <PriceButtons/> */}
        </div>
    )
}
export default Form