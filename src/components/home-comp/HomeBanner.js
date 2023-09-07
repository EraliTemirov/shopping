import React from 'react'
import '../../assets/styles/helper.css'
import img from '../../assets/img/top-banner.png'
import { Link } from 'react-router-dom';
const HomeBanner = () => {
  return (
    <div className="home-banner">
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <div className="banner-img">
                        <img src={img} alt="" />
                    </div>
                </div>
               <div className="col-6">
               <div className="banner-box">
                    <div className="banner-text">
                        #NEW SUMMER COLLECTION 2019
                    </div>
                    <div className="banner-title">
                         ARRIVALS SALES
                    </div>
                    <Link to="/" className="darkor-btn">
                        SHOP NOW
                    </Link>
                </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default HomeBanner