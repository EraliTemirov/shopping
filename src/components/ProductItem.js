import React from 'react'
import ProductBox from './ProductBox'

const ProductItem = () => {
  return (
    <div className='container mb-5'>
        <h2 className="home-title mb-5">
        POPULAR PRODUCTS
        </h2>
        <div className="row">
            <div className="col-4 mb-5">
                <ProductBox/>
            </div>
        </div>
    </div>
  )
}

export default ProductItem