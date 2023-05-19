import React, { useState } from 'react';

const AddToy = () => {
    const [pictureUrl, setPictureUrl] = useState('');
    const [name, setName] = useState('');
    const [sellerName, setSellerName] = useState('');
    const [sellerEmail, setSellerEmail] = useState('');
    const [subcategory, setSubcategory] = useState('');
    const [price, setPrice] = useState('');
    const [rating, setRating] = useState('');
    const [availableQuantity, setAvailableQuantity] = useState('');
    const [description, setDescription] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Logic to handle form submission
      // You can send the form data to your API or perform any other actions
      // Reset the form fields after submission
      setPictureUrl('');
      setName('');
      setSellerName('');
      setSellerEmail('');
      setSubcategory('');
      setPrice('');
      setRating('');
      setAvailableQuantity('');
      setDescription('');
    };
    return (
        <div className="flex items-center justify-center px-4 py-4">
        <div className="w-full sm:max-w-md px-4 py-6 bg-white shadow-md">
          <h1 className="text-3xl font-bold mb-4 text-center">Add A Toy</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="pictureUrl" className="block font-medium">
                Picture URL of the toy
              </label>
              <input
                type="text"
                id="pictureUrl"
                value={pictureUrl}
                onChange={(e) => setPictureUrl(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="block font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="sellerName" className="block font-medium">
                Seller Name
              </label>
              <input
                type="text"
                id="sellerName"
                value={sellerName}
                onChange={(e) => setSellerName(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="sellerEmail" className="block font-medium">
                Seller Email
              </label>
              <input
                type="email"
                id="sellerEmail"
                value={sellerEmail}
                onChange={(e) => setSellerEmail(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="subcategory" className="block font-medium">
                Sub-category
              </label>
              <input
                type="text"
                id="subcategory"
                value={subcategory}
                onChange={(e) => setSubcategory(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="price" className="block font-medium">
                Price
              </label>
              <input
                type="text"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="rating" className="block font-medium">
                Rating
              </label>
              <input
                type="text"
                id="rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="availableQuantity" className="block font-medium">
                Available Quantity
              </label>
              <input
                type="text"
                id="availableQuantity"
                value={availableQuantity}
                onChange={(e) => setAvailableQuantity(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block font-medium">
                Detail Description
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Add Toy
            </button>
          </form>
        </div>
      </div>
  
    );
};

export default AddToy;