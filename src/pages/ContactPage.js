import React from 'react';
import '../assets/styles/contact.scss';
import img from '../assets/img/darkor1contact.jpg'
const ContactPage = () => {
  return (
    <>
    <img className='contact-img' src={img} alt="" />
    <div className='container'>
        <div className="contact">
            <div className="row">
            <div className="col-7 col-ms-12 mt-ms-4">
                <form className="contact-form">
                  <div className="contact-form-title">
                  Get In Touch
                  </div>
                  <div className="row">
                    <div className="col-6 col-ms-12">
                      <label className='contact-form-text'>
                        First Name *
                      </label>
                      <input type="text" className='contact-form-input'/>
                    </div>
                    <div className="col-6 col-ms-12">
                      <label className='contact-form-text'>
                        Last Name *
                      </label>
                      <input type="text" className='contact-form-input'/>
                    </div>
                    <div className="col-12">
                      <label className='contact-form-text'>
                      Work Mail *
                      </label>
                      <input type="text" className='contact-form-input'/>
                    </div>
                    <div className="col-12">
                      <label className='contact-form-text'>
                      Phone number *
                      </label>
                      <input type="text" className='contact-form-input'/>
                    </div>
                    <div className="col-12">
                      <label className='contact-form-text'>
                      Message *
                      </label>
                      <textarea type="text" className='contact-form-input message'></textarea>
                    </div>
                  </div>
                  <div>
                  <button className="btn-submit">
                    Send Message
                  </button>
                  </div>
                </form>
            </div>

            </div>
        </div>
    </div></>
  )
}

export default ContactPage;