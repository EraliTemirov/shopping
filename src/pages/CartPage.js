import React, { useState } from 'react';

const CartPage = () => {

  const [count, setCount] = useState(1);
  function handleDecrease() {
    setCount(count + 1);
  }
  function handleIncrease() {
    setCount(count - 1);
  }

    


  return (


    <div className='container mt-5'>
   <table className='w-100'>
  <thead >
    <tr className='border'>
      <th className='border fs-5'>Image</th>
      <th className='border fs-5'>Product</th>
      <th className='border fs-5'>Price</th>
      <th className='border fs-5'>Size</th>
      <th className='border fs-5'>Quantity</th>
      <th className='border fs-5'>Total</th>
      <th className='border fs-5'>Remove</th>
     
    </tr>
  </thead>
  <tbody>
    <tr className='border fs-4'>
      <td className='border'> <img src='img' alt='img' /> </td>
      <td className='border'>Shim</td>
      <td className='border'>9900Uzs</td>
      <td className='border'>SML</td>
      <td className='border'>
      <div className="container">
      <div>
        <button
          onClick={handleIncrease}
          disabled={count < 2}
          className="inc-btn"
        >
          -
        </button>
        {count}
        <button
          onClick={handleDecrease}
          disabled={count > 19}
          className="dec-btn"
        >
          +
        </button>
      </div>
      
    </div>
      </td>
      <td className='border'>9900UZS</td>
      <td className='border text-center'><button>x</button></td>
    </tr>
    <tr className='border fs-4'>
      <td className='border'> <img src='img' alt='img' /> </td>
      <td className='border'>Shim</td>
      <td className='border'>9900Uzs</td>
      <td className='border'>SML</td>
      <td className='border'>
      <div className="container">
      <div>
        <button
          onClick={handleIncrease}
          disabled={count < 2}
          className="inc-btn"
        >
          -
        </button>
        {count}
        <button
          onClick={handleDecrease}
          disabled={count > 19}
          className="dec-btn"
        >
          +
        </button>
      </div>
      
    </div>
      </td>
      <td className='border'>9900UZS</td>
      <td className='border text-center'><button>x</button></td>
    </tr>
    <tr className='border fs-4'>
      <td className='border'> <img src='img' alt='img' /> </td>
      <td className='border'>Shim</td>
      <td className='border'>9900Uzs</td>
      <td className='border'>SML</td>
      <td className='border'>
      <div className="container">
      <div>
        <button
          onClick={handleIncrease}
          disabled={count < 2}
          className="inc-btn"
        >
          -
        </button>
        {count}
        <button
          onClick={handleDecrease}
          disabled={count > 19}
          className="dec-btn"
        >
          +
        </button>
      </div>
      
    </div>
      </td>
      <td className='border'>9900UZS</td>
      <td className='border text-center'><button>x</button></td>
    </tr>
  </tbody>
</table>
 
 

<div className='d-flex justify-content-between mt-5'>
<button className='border fs-5 mt-5'>Contuniu shopping</button>
  
  <div>

  <span className='fs-4'>CART TOTALS</span>
    <hr/>
    <p>TOTAL: <span>100700UZS</span></p>
  <button className='btn btn-primary'>Proceed to cheekout</button>
  </div>
</div>
   

    </div>
     
  )
}

export default CartPage;
