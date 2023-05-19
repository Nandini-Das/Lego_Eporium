import React from 'react';

const ViewDeatils = () => {
    return (
        <div>
        <h1 className="text-3xl font-bold mb-4">View Details</h1>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {toys.map((toy, index) => (
            <div key={index} className="card shadow">
              <img src={toy.picture} alt={toy.name} className="card-img-top" />
              <div className="card-body">
                <h2 className="card-title text-xl font-bold mb-2">{toy.name}</h2>
                <p className="text-sm mb-2">Seller: {toy.sellerName}</p>
                <p className="text-sm mb-2">Seller Email: {toy.sellerEmail}</p>
                <p className="text-lg mb-2">Price: ${toy.price}</p>
                <p className="text-lg mb-2">Rating: {toy.rating}</p>
                <p className="text-lg mb-2">Available Quantity: {toy.availableQuantity}</p>
                <p className="text-sm mb-2">{toy.detailDescription}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default ViewDeatils;