import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import Logo from "../../assets/img/newbozor.logo.png";
const Header = () => {
  return (
    <div className='container'>
      <nav className="navbar navbar-expand-lg ">
      
            <Link className="logo" to="/"><img src={Logo} alt='Logo' className='Logo'></img></Link>
            <ul className="header-menu ms-auto">
                <li className='drop'>
                    <Link className='active'  to="/">Home</Link>
                    <ul className='drop-menu'>
                        <li className='mb-3 mt-3'>
                            <a href="#categories">Categories</a>
                        </li>
                        <li className='mb-3 mt-3'>
                            <Link to="">Popular Products</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="/shop">Shop</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            <ul className="header-btn">
        <li>
                    <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#25262a" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
                    </button>
                </li>
                <li>
                    <Link to="/shop">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#25262a" class="bi bi-suit-heart" viewBox="0 0 16 16">
  <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
</svg>
                    </Link>
                </li>
                <li>
                    <Link to="/cart">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#25262a" class="bi bi-bag" viewBox="0 0 16 16">
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
</svg>
                    </Link>
                </li>
        </ul>
        
        </nav>

    </div>
  )
}

export default Header