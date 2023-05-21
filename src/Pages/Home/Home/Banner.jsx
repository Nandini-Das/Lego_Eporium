import React from 'react';

const Banner = () => {
    return (
        <div className="bg-cover bg-center py-20" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1533234427049-9e9bb093186d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80")' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
           
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Welcome to Our Website</h1>
              <p className="text-lg  font-bold text-info-content mb-6">
                Discover a world of amazing Lego toy sets and <br /> games for all ages. 
                We offer a wide range of options <br /> to spark creativity and 
                provide endless <br /> hours of fun and entertainment.
              </p>
              <a href="/shop" className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded">
                Explore Now
              </a>
            </div>
  
           
            <div className="text-center">
            <img src="https://images.unsplash.com/photo-1501686637-b7aa9c48a882?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" srcset="" />
            </div>
          </div>
        </div>
       
      </div>
    );
};

export default Banner;