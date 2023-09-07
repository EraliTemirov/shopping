import React from 'react'
import HomeBanner from './../components/home-comp/HomeBanner';
import HomeCategory from '../components/home-comp/HomeCategory';
import ProductItem from '../components/ProductItem';

const HomePage = () => {
  return (
    <>
       <HomeBanner />
       <HomeCategory/>
       <ProductItem/>
       <HomeBanner />
    </>
  )
}

export default HomePage
