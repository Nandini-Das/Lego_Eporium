import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const UpdateToy = () => {
  const toys = useLoaderData();
  const { user } = useContext(AuthContext);
  const { _id, name, price, available_quantity, detail_description } = toys;

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const updatedToy = {
      name: form.name.value,
      price: form.price.value,
      available_quantity: form.available_quantity.value,
      detail_description: form.detail_description.value,
    };

    fetch(`http://localhost:5000/toys/${_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert('Updated Toy Successfully');
        }
      });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow-md">
      <h2 className="text-3xl font-bold mb-4 text-center">Update Toy</h2>
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
            <label htmlFor="price" className="block font-medium">
              Price
            </label>
            <input
              type="text"
              name="price"
              id="price"
              defaultValue={price}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label htmlFor="availableQuantity" className="block font-medium">
              Available Quantity
            </label>
            <input
              type="text"
              name="available_quantity"
              id="available_quantity"
              defaultValue={available_quantity}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="description" className="block font-medium">
              Description
            </label>
            <textarea
              id="detail_description"
              name="detail_description"
              defaultValue={detail_description}
              className="w-full border border-gray-300 rounded px-3 py-2"
            ></textarea>
          </div>
        </div>
        <div className="text-center mt-4">
          <button
            type="submit"
            className="bg-blue-500 text-white rounded px-4 py-2 font-medium hover:bg-blue-600"
          >
            Update Toy
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateToy;
