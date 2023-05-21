import React from 'react';
import 'react-tabs/style/react-tabs.css';
import GallerySection from './GallerySection';
import Banner from './Banner';
import ShopByCategorySection from './ShopByCategorySection';
import FlashSaleSection from './FlashSaleSection';
import HappyCustomer from './HappyCustomer';



const Home = () => {
    return (
        <div>
           <Banner></Banner>
   <div>
   
    <GallerySection></GallerySection>
   </div>
   <div>
    <h3 className='"text-6xl text-orange-700 font-bold mb-4 text-center"'>Shop By Category</h3>
    <div className='mx-auto'>
        <div className='mx-auto'>
        <ShopByCategorySection></ShopByCategorySection>
        </div>
        <div>
        <FlashSaleSection></FlashSaleSection>
        </div>
    <div>
       <HappyCustomer></HappyCustomer>
    </div>
     
    </div>
    
   </div>
        </div>
    );
};

export default Home;