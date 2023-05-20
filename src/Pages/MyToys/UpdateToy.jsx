import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const UpdateToy = () => {
  
const toys = useLoaderData();
const { user } = useContext(AuthContext);
  const { name , picture,subcategory, price, rating, available_quantity,  detail_description ,seller, seller_email } = toys;
  console.log(toys.picture)
  const handleUpdate = (_id) => {
    console.log(_id);
    fetch(`http://localhost:5000/toys/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(_id),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          setControl(!control);
        }
        console.log(result);
      });
  };
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow-md">
      <h2 className="text-3xl font-bold mb-4 text-center">Add A Toy</h2>
      <form onSubmit={handleUpdate}>
        <div className="grid grid-cols-2 gap-4">
        
          <div>
            <label htmlFor="name" className="block font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              defaultValue={name}
             
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          
          <div>
            <label htmlFor="subcategory" className="block font-medium">
              Sub-category
            </label>
            <select
              id="subcategory"
              value={subcategory}
              
              className="w-full border border-gray-300 rounded px-3 py-2"
            >
              <option value="">Select Subcategory</option>
              <option value="LEGO City">LEGO City</option>
              <option value="LEGO Star Wars">LEGO Star Wars</option>
              <option value="LEGO Architecture">LEGO Architecture</option>
              <option value="LEGO Cars">LEGO Cars</option>
            </select>
          </div>
          <div>
            <label htmlFor="price" className="block font-medium">
              Price
            </label>
            <input
              type="text"
              id="price"
              value={price}
             
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label htmlFor="rating" className="block font-medium">
              Rating
            </label>
            <input
              type="text"
              id="rating"
              value={rating}
             
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label htmlFor="availableQuantity" className="block font-medium">
              Available Quantity
            </label>
            <input
              type="text"
              id="available_quantity"
              value={available_quantity}
             
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="description" className="block font-medium">
              Description
            </label>
            <textarea
              id="detail_description"
              value={detail_description}
              
              className="w-full border border-gray-300 rounded px-3 py-2"
            ></textarea>
          </div>
        </div>
        <div className="text-center mt-4">
          <button
            type="submit"
            value= "Update Confirm"
            className="bg-blue-500 text-white rounded px-4 py-2 font-medium hover:bg-blue-600"
          >
           Update Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateToy;