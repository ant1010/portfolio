import React from 'react';
import {useState} from 'react';
import "./SubmitForm.css";

function SubmitForm({}) {
    
    const [form,setForm] = useState({
        name: "",
        email: "",
        message:"",
    });
    function onNameChange(event) {
        console.log("name change");
        setForm({...form,name:event.target.value});
    }
  
   function onEmailChange(event) {
        setForm({...form, email: event.target.value});
    }
  
    function onMessageChange(event){
        setForm({...form, message:event.target.value});
    }
    function handleSubmit ( event ) {
        event.preventDefault();
        
        console.log(JSON.stringify(form));
        console.log("heek");
        fetch('/send', {
            method: "POST",
            body: JSON.stringify(form),
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
          }).then(
          (response) => (response.json())
            ).then((response)=> {
          if (response.status === 'success') {
            alert("Message Sent.");
            this.resetForm()
          } else if(response.status === 'fail') {
            alert("Message failed to send.")
          }
        })
      }
    return (
        <div className=" page submit-container">
        <div className = "page-bubble bubble3">
                <h2>Submit form</h2>
                <form id="contact-form" method="POST" onSubmit = {handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" onChange = {onNameChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" onChange = {onEmailChange}aria-describedby="emailHelp" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control" rows="5" onChange = {onMessageChange}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
           </div>
            
        </div>
            
      
    )
   
}

export default SubmitForm;
