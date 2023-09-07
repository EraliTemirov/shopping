import React from 'react'

const ContactPage = () => {
  return (
    <div className='container'>
        <div className="contact">
            <div className="row">
            <div className="col-7 col-ms-12 mt-ms-4">
                <form className="contact-form">
                  <div className="contact-form-title text-center">
                    Get in touch with us
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
                  <div className="contact-form-text d-flex">
                  <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" defaultChecked />
                  <p className="">
                  By clicking submit below, you consent to Justuno storing and processing the personal information submitted to provide the content requested.
                  </p>
                  </div>
                  <div>
                  <button className="btn btn-blue">
                    Submit
                  </button>
                  </div>
                </form>
            </div>
            
            </div>
        </div>
    </div>
  )
}

export default ContactPage