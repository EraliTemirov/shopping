import React from 'react'
import '../assets/styles/shop.css'
import ProductBox from '../components/ProductBox'
import Shopcategory from '../components/Shopcategory'

const ShopPage = () => {
  return (
    <>
        <div className="breakpoints">
             <div className="container">
                    <span className='text-red'>Home</span> / Shop
                </div>
        </div>

        <div className='container'>
            <div className="shop-title">
                Shop All
            </div>
        <div className="row">
            <div className="col-9">
                <div className="row">
                    <div className="col-6">
                        <ProductBox/>
                    </div>
                    <div className="col-6">
                        <ProductBox/>
                    </div>
                </div>
            </div>
        </div>
       <Shopcategory/>
    </div>
    </>
  )
}

export default ShopPage