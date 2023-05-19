import React from 'react';
import Marquee from "react-fast-marquee";
const GallerySection = () => {
  
    const images = [
        { id: 1, src: 'https://images.unsplash.com/photo-1618003657844-aa7560c8676a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=874&q=80', alt: 'Image 1' },
        { id: 2, src: 'https://images.unsplash.com/photo-1618897871149-49ec9334af79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxlZ28lMjB0b3lzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60', alt: 'Image 2' },
        { id: 3, src: 'https://images.unsplash.com/photo-1577113398406-d9192cf6c3c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80', alt: 'Image 3' },
        { id: 4, src: 'https://images.unsplash.com/photo-1528066588405-9e20509b9e34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80', alt: 'Image 4' },
        { id: 5, src: 'https://images.unsplash.com/photo-1646324779796-eeb9bdc0b417?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80', alt: 'Image 5' },
        { id: 6, src: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80', alt: 'Image 6' },
      ];
    
  return (
    
        <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Photo Gallery</h2>
      <div className="">
      <Marquee
       speed={150} // Adjust the speed value as desired (lower value for faster scrolling)
       style={{
         animationDuration: '3s', // Adjust the animation duration as desired (lower value for faster scrolling)
         animationTimingFunction: 'linear', // Set the timing function to linear for consistent speed
       }}>
        <div className='flex'>
        {images.map((image) => (
          <div key={image.id} className="flex">
            <img src={image.src} alt={image.alt} className="w-25 h-25" />
            
          </div>
        ))}
        </div>
      
       </Marquee>  
      </div>
    </div>
   
    
  );
};

export default GallerySection;
