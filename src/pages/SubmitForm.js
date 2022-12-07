import React from 'react';
import {useState} from 'react';
import "./SubmitForm.css";
import ButtonLoader from "./ButtonLoader";
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
        fetchData();
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
            resetForm();
            fetchData();
          } else if(response.status === 'fail') {
            alert("Message failed to send.")
          }
        })
      }
      function resetForm(){
          setForm({...form,name:"",email:"",message:""});
      }
      const [loading,setLoading] = useState(false);
      function fetchData (){
        setLoading( !loading );
    
        //Faking API call here
        setTimeout(() => {
          setLoading( false );
        }, 2000);
      };
    return (
        <div className=" page submit-container">
        
        <div className = "page-bubble bubble3">
                <h2>Contact Me</h2>
                <form id="contact-form" method="POST" onSubmit = {handleSubmit}>
                    <div className="form-group">
                        <label className = "label" htmlFor="name">Name</label>
                        <input type="text" className="form-control name" placeholder = "Name.."value ={form.name}onChange = {onNameChange}/>
                    </div>
                    <div className="form-group">
                        <label className = "label" htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control email" placeholder = "Email.." value ={form.email}onChange = {onEmailChange}aria-describedby="emailHelp" />
                    </div>
                    <div className="form-group">
                        <label className = "label" htmlFor="message">Message</label>
                        <textarea className="form-control message" rows="5" placeholder = "Message.." value ={form.message} onChange = {onMessageChange}></textarea>
                    </div>
                    
                    <button  type="submit" className="submit" disabled={loading}>
          {loading && (
            <i
              className="fa fa-refresh fa-spin"
              style={{ marginRight: "5px" }}
            />
          )}
          {loading && <span>Sending...</span>}
          {!loading && <span>Submit</span>}
        </button>
                    
                </form>
                 
           </div>
          
            
        </div>
            
      
    )
   
}

export default SubmitForm;
