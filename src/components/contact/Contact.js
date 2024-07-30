import { useState } from "react";

import "./Contact.css"
import { BounceLoader, PulseLoader } from "react-spinners";
import arrow from "../../data/arrow.svg"

const Contact = () => {
const [isLoading, setIsLoading] = useState(false);
const [emptyForm, setEmptyForm] = useState(false);
const [success, setSuccess] = useState(false);
const [formValues,setFormValues] = useState ({name: "" ,email:"",message: ""});

const handleChange = (e)  => {
  const {name , value} =e.target;
  setFormValues({...formValues, [name]:value})

}
  const onSubmit = async (event) => {
    event.preventDefault();
    if (!formValues.email || !formValues.name || !formValues.message){
        setEmptyForm(true);
        setTimeout(() => {
            setEmptyForm(false)

          },[3000])
    }
    else {

    setIsLoading(true);
    setEmptyForm(false);
    const formData = new FormData(event.target);

    formData.append("access_key", "9b47c5ae-43bc-4bdf-ae44-ff51f2d95c87");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log(isLoading);
      setIsLoading(false);
      setSuccess(true);
    
    }
 setTimeout(()=> {
  setSuccess(false);
 },2000)
}
  };
  return (  
      
    <div className="contact-wrapper mt-5 " >

<form  onSubmit={onSubmit} >
<h1 className="pb-4">Get in touch</h1>
  
  <div className="mb-3">
    <label  class="form-label"> Type ame</label>
    <input type="text" className="form-control"  placeholder="Subject" name="name" value={formValues.name} onChange={handleChange}/>
  </div>
  <div className="mb-3">
    <label  class="form-label">Email</label>
    <input type="email" className="form-control" placeholder="Email" name="email"  value={formValues.email} onChange={handleChange}/>

  </div>
 
  <div className="mb-3">
  <label  class="form-label">Message</label>
  <textarea className="form-control"  rows="3" placeholder="Message" name="message"  value={formValues.message} onChange={handleChange}></textarea>
</div>
 <button type="submit" className="btn btn-primary ">Send your message  {!isLoading && <img  src={arrow} />}  {isLoading &&  <PulseLoader size={4} color="#ffffff"/> }  </button>
{emptyForm && <div className="bg-danger-subtle border text-danger border-danger rounded mt-3 p-2">It's seems that you forgot something. Please check your entries!</div>  }

{success && <div className="bg-success-subtle border text-success border-success rounded mt-3 p-2">Your message was sent succesfully.</div> }
</form>




    </div>
  );
}
 
export default Contact;