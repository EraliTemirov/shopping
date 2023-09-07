import React from 'react'
import '../assets/styles/product.css'
import img from '../assets/img/cat2.png'
import { Link } from 'react-router-dom';
const ProductBox = () => {
  return (
    <div className='product-box'>
            <Link className="product-box-img">
                <img src={img} alt="" />
            </Link>
            <div className='mt-3 mb-4'>
            <Link className="product-title">
                Erkaklar ko'ylagi
            </Link>
            <div className="product-price">
                70 000 USZ
            </div>
            </div>
    </div>
  )
}

export default ProductBox