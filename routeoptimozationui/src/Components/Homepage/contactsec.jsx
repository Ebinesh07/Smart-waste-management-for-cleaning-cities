import React from "react";
import "./Homepage.css";
import { useState } from "react";

function Contact() {

  const [data,setData]=useState({name:"",email:"",subject:""});
  const[error,setError]=useState({});


  function changedata(userdata){
    setData({...data,[userdata.target.name]:userdata.target.value})
  }

  const formValidate=()=>{
    let temperr={};
    if (!data.name.trim()){
      temperr.name="fill the correct name"
    }
    if(!data.email){
      temperr.email="fill the valid email"
    }
    if(!data.subject ){
      temperr.subject="fill  vaild subject "
    }
    setError(temperr)
    return Object.keys(temperr).length === 0;
  }

  function formsubmit(userdata){
    userdata.preventDefault()
    if(formValidate()){
      console.log(data)
      setData({name:"",email:"",subjec:""})
      alert("Request sended successfully...!")
    }
  }
  return (
    <section className="contact">

      {/* Header */}
      <div className="contact-header">
        <h2>Contact Us</h2>
        <p>Get in touch with us for smart waste solutions and support.</p>
      </div>

      <div className="contact-container">

        {/* Left Form */}
        <div className="contact-form">
          <h3><i className="bi bi-headset"></i>      Get System Support</h3>
          <p>Tell us your issue and we will respond quickly.</p>
          
           <form onSubmit={formsubmit} className="form">
          {/* <div className="row"> */}
            <input type="text" name="name" placeholder="Full Name" 
            value={data.name}
            onChange={changedata}/>
            {error.name && <p>{error.name}</p>}

            <input type="email" name="email" placeholder="Email" 
            value={data.email}
            onChange={changedata}/>
            {error.email && <p>{error.email}</p>}
          {/* </div> */}

          <input type="text" name="subject" placeholder="Subject"
          value={data.subject}
          onChange={changedata} />
          {error.subject && <p>{error.subject}</p>}

          <textarea placeholder="Describe your issue..." rows="5"></textarea>

          <button type="submit">Submit Request →</button>
          </form>
        </div>
        

        {/* Right Info */}
        <div className="contact-info">
          <h3><i className="bi bi-info-circle"></i>      Support Information</h3>
          <p>Our team is ready to assist you.</p>

          <div className="info-box">
            <p><i className="bi bi-envelope"></i><strong>      Email:</strong> support@smartwaste.com</p>
            <p><i className="bi bi-telephone-fill"></i><strong>      Phone:</strong> +91 98765 43210</p>
            <p><i className="bi bi-geo-alt-fill"></i><strong>      Location:</strong> Chennai, India</p>
            <p><i className="bi bi-clock-fill"></i><strong>      Hours:</strong> Mon - Sat: 9AM - 6PM</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;