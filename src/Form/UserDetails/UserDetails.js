import React, { useState } from 'react'
import './UserDetails.css'
const UserDetails = () => {
    const [ mobile, setMobile ] = useState()
    const [ name, setName ] = useState()

    const [ nameStatus, setNameStatus ] = useState(true)
    const [ remarksStatus, setRemarkStstus ] = useState(true)
    const [ btnstatus, setBtnstatus ] = useState(true)
    
    const onChangeMobile = event => {
        let value = event.target.value.length
        if(value == 0) {
            setNameStatus(true)
        }
        else {
            setNameStatus(false)
        }
    }
    const onChangeName = event => {
        let value = event.target.value.length
        if(value == 0) {
            setRemarkStstus(true)
        }
        else {
            setRemarkStstus(false)
        }
    }
    const onChangeRemarks = event => {
        let value = event.target.value.length
        if(value == 0) {
            setBtnstatus(true)
        }
        else {
            setBtnstatus(false)
        }
    }



    const onsubmit = e => {
        alert('Hii')

        e.preventDefault()
    }
    return (
        <div className="userdetailscontainer">
            <form>
                <input onChange={onChangeMobile} type="text" placeholder='Enter your mobile number*' value={mobile} required/>
                <input onChange={onChangeName} type="text" placeholder='Enter your name*' value={name} disabled={nameStatus} required/>
                <input onChange={onChangeRemarks} type="text" placeholder='Enter Remarks(Optional)' disabled={remarksStatus}/>
                <button type='submit' value='submit' onSubmit={onsubmit} disabled={btnstatus}>Bid Now</button>
            </form>
        </div>
    )
}
export default UserDetails