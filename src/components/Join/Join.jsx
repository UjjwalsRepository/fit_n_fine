import React, { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'
const Join = () => {
    const form=useRef();

    const sendEmail=(e)=>{
        e.preventDefault();
        emailjs.sendForm('service_r2a7t6q','template_f8t279e',form.current,'K6Y34iHi0RaB7XVDu')
        .then((result)=>{
            console.log(result.text);
        },(error)=>{
            console.log(error.text);
        });
    };
  return (
    <div className="Join" id="join-us">
        <div className="left-j">
            <hr/>
            <div>
                <span className='stroke-text'>READY TO</span>
                <span>LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY</span>
                <span className='stroke-text'>WITH US?</span>
            </div>
        </div>
        <div className="right-j">
            <form ref={form}  className="email-container" onSubmit={sendEmail}>
                <input type="email" name="from_name" id="" 
                placeholder='Enter your email to join' />
                <button className="btn btn-j">Join Us</button>
            </form>
        </div>
    </div>
  )
}

export default Join