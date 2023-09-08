import React, { useEffect, useState } from 'react';
import '../assets/styles/product.css';
import { Link, useParams } from 'react-router-dom';

const ProductBox = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://api/v1/product/deactive/64ddc5eed2149f631a8de64c`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, [productId]);

  return (
    <div className='product-box'>
      <Link className="product-box-img">
        <img src={product.image} alt="" />
      </Link>
      <div className='mt-3 mb-4'>
        <Link className="product-title">
          {product.title}
        </Link>
        <div className="product-price">
          {product.price} USZ
        </div>
      </div>
    </div>
  );
};

export default ProductBox;
