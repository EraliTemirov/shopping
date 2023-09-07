import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import img from '../../assets/img/footer.jpg'
const Footer = () => {
  return (
    <div className='container'>
        <div className="footer">
            <div className="row">
                <div className="col-4">
                    <div className="footer-left">
                        <p className="footer-title">
                            Promo
                        </p>
                        <img src={img} alt="" />
                        <p className='text-red'>
                        Finding Your Perfect Shirts This Summer 
                        </p>
                        <p className='footer-text'>
                          Promo from July 15 — 25, 2019
                        </p>
                    </div>
                </div>
                <div className="col-8">
                    <div className="footer-right">
                        <div className="footer-title">
                          QUICK LINKS
                        </div>
                        <div className="row">
                            <div className="col-3">
                            <ul className='ml6'>
                                <li className='mt-3'> <Link className="footer-text" to="/">Sell online</Link> </li>
                                <li className='mt-3'> <Link className="footer-text" to="/">Features</Link> </li>
                                <li className='mt-3'> <Link className="footer-text" to="/">Shopping cart</Link> </li>
                                <li className='mt-3'> <Link className="footer-text" to="/">Store builder</Link> </li>
                             </ul>
                            </div>
                            <div className="col-3">
                            <ul className='ml6'>
                                <li className='mt-3'> <Link className="footer-text" to="/">Mobile commerce</Link> </li>
                                <li className='mt-3'> <Link className="footer-text" to="/">Dropshipping</Link> </li>
                                <li className='mt-3'> <Link className="footer-text" to="/">Website development</Link> </li>
                             </ul>
                            </div>
                            <div className="col-3">
                            <ul className='ml6'>
                                <li className='mt-3'> <Link className="footer-text" to="/">Point of sale</Link> </li>
                                <li className='mt-3'> <Link className="footer-text" to="/">Hardware</Link> </li>
                                <li className='mt-3'> <Link className="footer-text" to="/">Software</Link> </li>
                             </ul>
                            </div>
                            <div className="col-3">
                            <ul className='ml6'>
                                <li className='mt-3'> 
                                  <p className='d-center'><svg className='mt1' xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#ee4266" class="bi bi-geo-alt" viewBox="0 0 16 16">
  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg>  <p className='ml-2'>203 Fake St. Mountain View, San Francisco, California, USA</p>
                                    </p> 
                                </li>
                                <li className='mt-3'> <p>+2 392 3929 210</p> </li>
                                <li className='mt-3'> <p>emailaddress@domain.com</p> </li>
                             </ul>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    </div>
  )
}

export default Footer