import React from 'react';
import { useLoaderData} from 'react-router-dom';

const ViewDetails = () => {
  const toy = useLoaderData();
  console.log(toy.name);
  
  return (
    <div className='my-8'> 
     <div className="flex items-center justify-center h-screen bg-gray-100 p-2 mt-2">
      <div className="max-w-md mx-auto bg-purple-100 shadow-lg rounded-lg overflow-hidden">
        <img src={toy.picture} alt={toy.name} className="w-full h-64 object-cover" />
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">{toy.name}</h2>
          <p className="text-sm text-gray-500 mb-2">Seller: {toy.seller}</p>
          <p className="text-sm text-gray-500 mb-4">Seller Email: {toy.seller_email}</p>
          <p className="text-lg text-blue-600 mb-2">Price: ${toy.price}</p>
          <p className="text-lg text-yellow-500 mb-2">Rating: {toy.rating}</p>
          <p className="text-lg text-green-600 mb-2">Available Quantity: {toy.available_quantity}</p>
          <p className="text-info mb-2">{toy.detail_description}</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ViewDetails;
