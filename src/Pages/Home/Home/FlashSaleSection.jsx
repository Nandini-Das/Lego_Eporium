import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const FlashSaleSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const flashSaleItems = [
    {
      title: 'Lego City Space Rover',
      description: 'Embark on exciting space adventures with the Lego City Space Rover set. Explore new planets, gather samples, and uncover the mysteries of the universe.',
      price: 19.99,
      image: 'https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80',
    },
    {
      title: 'Lego Star Wars Millennium Falcon',
      description: 'Join the epic battle between the forces of good and evil with the Lego Star Wars Millennium Falcon set. Build the iconic spaceship and relive your favorite Star Wars moments.',
      price: 29.99,
      image: 'https://images.unsplash.com/photo-1517242810446-cc8951b2be40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    },
    {
      title: 'Lego Friends Heartlake City Resort',
      description: 'Experience a fun-filled vacation at the Lego Friends Heartlake City Resort. Enjoy the water park, go on thrilling rides, and relax at the resort with your friends.',
      price: 24.99,
      image: 'https://images.unsplash.com/photo-1534309396709-4b5a9b59165a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80',
    },
    {
      title: 'Lego Technic Porsche 911 GT3 RS',
      description: 'Get behind the wheel of the iconic Porsche 911 GT3 RS with the Lego Technic set. Build a highly detailed replica of the sports car and feel the power of engineering.',
      price: 39.99,
      image: 'https://images.unsplash.com/photo-1534732806146-b3bf32171b48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    },
  
  ];

  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 data-aos="fade-up" className="text-3xl font-extrabold text-purple-900">
            %Flash Sale%
          </h2>
          <p data-aos="fade-up" className="mt-4 text-lg text-blue-400">
            Limited-time offers on Lego sets. Hurry up and grab your favorite sets at discounted prices!
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {flashSaleItems.map((item, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                className="w-full h-48 object-cover"
                src={item.image}
                alt={item.title}
              />
              <div className="p-4">
                <h3 className="text-xl font-medium text-gray-900">
                  {item.title}
                </h3>
                <p  data-aos="fade-up" className="mt-2 text-base text-gray-500">
                  {item.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xl font-bold text-gray-900">${item.price}</span>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlashSaleSection;
