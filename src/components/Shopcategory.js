import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '.././assets/styles/hom-cat.css';

const Shopcategory = () => {
  const [items, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get('https://darkor.bossblog.uz/api/v1/product') 
      .then((res) => {
        console.log('API Response:', res.data); 
        if (res.status === 200) {
          setProducts(res.data.data.data);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {items.filteredData.map((item) => (
            <div key={item._id}  className=' d-flex justify-content-between'>
                <div className=" border cart">
                    <img src={item.image} alt="img"  className='w-100' />
                    <Link to="/" className="product-bt "> {item.name}</Link>
                </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Shopcategory;
