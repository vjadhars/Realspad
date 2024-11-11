import React,{ useRef } from 'react'
import "./Contact_page.css"
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

export default function Contact_page() {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_p2hj4pg', 'template_sis99y5', form.current, 'oV77QquI9XQe6jixX')
        .then((result) => {
            Swal.fire({
                title: 'Thank You!',
                text: 'Your message has been sent successfully.',
                icon: 'success',
                confirmButtonText: 'OK',
              });
            console.log(result.text);
            form.current.reset();
        }, (error) => {
            console.log(error.text);
        });
        
    };


  return (
    <div className='main_contpage'>
            <form ref={form} onSubmit={sendEmail} className="contact-form">
    <div className="container">
        <h1 className='cont_head'>Get In Touch</h1>
        <div className="row justify-content-center aisng">
   
            <div className="col-md-8">
                <div className="row">
            
                    <div className="col-md-6">
                        <input type="text" id="name" className='my_contact_id' name="user_name" placeholder='Your Name*' id="" />
                    </div>
                    <div className="col-md-6 mt-2 mt-md-0">
                        <input type="email" id="email" className='my_contact_id' name="user_email" placeholder='Your Email*' id="" />
                    </div>
                    
                </div>
            </div>
       
        </div>
        <div className="row mt-2 justify-content-center">
        <div className="col-md-8">

            <textarea id="message" name="message"   placeholder='Your Message' className='my_contact_id' id="" cols="30" rows="10"></textarea>
        </div>
        </div>
        <div className=' d-flex justify-content-center'>
            <button type="submit" value="Send" className='send_msg'>Send Message </button>
        </div>
    </div>
    </form>
    </div>
  )
}
