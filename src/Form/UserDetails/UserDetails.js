import React, { useState } from 'react'
import './UserDetails.css'
const UserDetails = () => {
    const [ mobile, setMobile ] = useState()
    const [ name, setName ] = useState()
    const [ remark, setRemark ] = useState()


    const [ nameStatus, setNameStatus ] = useState(true)
    const [ remarksStatus, setRemarkStstus ] = useState(true)
    const [ btnstatus, setBtnstatus ] = useState(true)

    const [ color, setColor ] = useState('#EDF0F7')
    const [ textcolor, setTextcolor ] = useState('#2355FC')
    const [ opacity, setOpacity ] = useState('30%')

    const onChangeMobile = event => {
        setMobile(event.target.value)
        let value = event.target.value.length
        if(value === 0) {
            setNameStatus(true)
        }
        else {
            setNameStatus(false)
        }
    }
    const onChangeName = event => {
        setName(event.target.value)
        let value = event.target.value.length
        if(value === 0) {
            setRemarkStstus(true)
            setColor('#EDF0F7')
            setTextcolor('#2355FC')
            setOpacity('30%')
        }
        else {
            setRemarkStstus(false)
            setColor('#3054D6')
            setTextcolor('#FFFFFF')
            setOpacity('100%')

        }
    }
    const onChangeRemarks = event => {
        setRemark(event.target.value)
        let value = event.target.value.length
        if(value === 0) {
            setBtnstatus(true)
        }
        else {
            setBtnstatus(false)
        }
    }



    const onsubmit = e => {
        alert(`Hey ${name} your mobile number is ${mobile}. And remark is ${remark} `)
        e.preventDefault()
    }
    return (
        <div className="userdetailscontainer">
            <hr/>
            <form onSubmit={onsubmit} >
                <div className="inputclass">
                    <input class="has-prefix" onChange={onChangeMobile} type="text" placeholder='Enter your mobile number*' value={mobile} required/>
                    <input onChange={onChangeName} type="text" placeholder='Enter your name*' value={name} disabled={nameStatus} required/>
                    <input onChange={onChangeRemarks} type="text" placeholder='Enter Remarks(Optional)' value={remark} disabled={remarksStatus}/>
                </div>
                <div className="btnclass">
                    <button type='submit' disabled={btnstatus} style={{backgroundColor:color}}><p style={{color:textcolor,opacity:opacity}}>Bid Now</p></button>
                </div>
            </form>
        </div>
    )
}
export default UserDetails