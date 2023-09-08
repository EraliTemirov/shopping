import React from 'react';
import '../assets/styles/contact.scss';
import img from '../assets/img/darkor1contact.jpg'
const ContactPage = () => {
  return (
    <>
    <img className='contact-img' src={img} alt="" />
    <div className='container'>
        <div className="contact">
            <div className=" d-flex justify-content-between">
            <div className="col-7 col-ms-12 mt-ms-4 ">
            <div className="contact-form-title  fs-3 mb-3">
                  Get In Touch
                  </div>
                <form className="contact-form card p-5">
                  
                  <div className="row">
                    <div className="col-6 col-ms-12">
                      <label className='contact-form-text fs-5'>
                        First Name *
                      </label>
                      <input type="text" className='contact-form-input fs-5'/>
                    </div>
                    <div className="col-6 col-ms-12">
                      <label className='contact-form-text fs-5'>
                        Last Name *
                      </label>
                      <input type="text" className='contact-form-input'/>
                    </div>
                    <div className="col-12">
                      <label className='contact-form-text fs-5'>
                      Work Mail *
                      </label>
                      <input type="email" className='contact-form-input'/>
                    </div>
                    <div className="col-12">
                      <label className='contact-form-text fs-5'>
                      Phone number *
                      </label>
                      <input type="tel" className='contact-form-input'/>
                    </div>
                    <div className="col-12">
                      <label className='contact-form-text fs-5'>
                      Message *
                      </label>
                      <textarea type="text" className='contact-form-input message'></textarea>
                    </div>
                  </div>
                 
                  <div>
                  <button className="btn-submit bg-primary">
                    Send Message
                  </button>
                  </div>
                </form>
                
            </div>
            <div className='mt-5' >
                    <div className='card m-2 p-3 mt-3'>
                      <span className='fs-4 text-info'>NEW YORK</span>
                      <p className='text-secondary'>203 Fake St. Mountain View, San Francisco, California,</p>
                      <span className='fs-5 text-secondary' >USA</span>
                    </div>
                    <div className='card m-2 p-3 mt-3'>
                      <span className='fs-4 text-info'>NEW YORK</span>
                      <p className='text-secondary'>203 Fake St. Mountain View, San Francisco, California,</p>
                      <span className='fs-5 text-secondary' >USA</span>
                    </div>
                    <div className='card m-2 p-3 mt-3'>
                      <span className='fs-4 text-info'>NEW YORK</span>
                      <p className='text-secondary'>203 Fake St. Mountain View, San Francisco, California,</p>
                      <span className='fs-5 text-secondary' >USA</span>
                    </div>
                  </div>
            </div>
        </div>
    </div></>
  )
}

export default ContactPage;