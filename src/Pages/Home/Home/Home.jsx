import React from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import GallerySection from './GallerySection';
import Banner from './Banner';
import ShopByCategorySection from './ShopByCategorySection';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
   <div>
    <h1 className='text-center'>Gallery Section</h1>
    <GallerySection></GallerySection>
   </div>
   <div>
    <h3 className='text-center'>Shop By Category</h3>
    <div className='mx-auto'>
        <div className='mx-auto'>
        <ShopByCategorySection></ShopByCategorySection>
        </div>
     
    </div>
    
   </div>
        </div>
    );
};

export default Home;