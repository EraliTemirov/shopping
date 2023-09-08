import React from 'react'
import '../../assets/styles/hom-cat.css'
import cat1 from '../../assets/img/cat1.png'
import cat2 from '../../assets/img/cat2.png'
import cat3 from '../../assets/img/banner.png'
import { Link } from 'react-router-dom';
const HomeCategory = () => {
    
  return (
    <div className="container">
        <div className="home-cat"  id="#categories">
            <h2 className="home-title mb-4">
                DISCOVER <br />
                THE COLLECTIONS
        </h2>
        <div className="row mt-5">
            <div className="col-8">
                <div className="cat-img lorge">
                    <img src={cat1} alt="img" />
                    <Link to="" className="product-btn">Women <span>25 items</span></Link>
                </div>
            </div>
            <div className="col-4">
                <div className="row">
                    <div className="col-12 mb-3">
                        <div className="cat-img">
                        <img src={cat2} alt="img" />
                        <Link to="" className="product-btn">Men <span>25 items</span></Link>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="cat-img">
                        <img src={cat3} alt="img" />
                        <Link to="" className="product-btn">Shoes <span>25 items</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default HomeCategory