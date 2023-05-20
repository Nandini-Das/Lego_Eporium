import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const AddToy = () => {
  const toys = useLoaderData();
  const { user } = useContext(AuthContext);
  const { name , picture,subcategory, price, rating, available_quantity,  detail_description ,seller, seller_email } = toys;
 console.log(toys)

  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;
        const name = form.name.value;
        const picture = form.picture.value;
        const subcategory = form.subcategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const available_quantity = form.available_quantity.value;
        const detail_description = form.detail_description.value;
        const seller = user?.displayName;
        const seller_email = user?.email;
    const toy = {
      picture,
      name,
      seller : seller,
      seller_email : seller_email,
      subcategory,
      price,
      rating,
      available_quantity,
      detail_description,
    };

    // console.log(toy);
    fetch('http://localhost:5000/myToys', {
        method: 'POST', 
        headers: {
            'content-type': 'application/json'
        }, 
        body: JSON.stringify(toy)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.insertedId){
            alert('Added Toy Successfully')
        }
    })
  };
  

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow-md">
      <h2 className="text-3xl font-bold mb-4 text-center">Add A Toy</h2>
      <form onSubmit={handleAddToy}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="picture" className="block font-medium">
              Picture URL of the toy
            </label>
            <input
              type="text"
              id="picture"
              value={picture}
          
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label htmlFor="name" className="block font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
             
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label htmlFor="seller" className="block font-medium">
              Seller Name
            </label>
            <input
              type="text"
              id="seller"
             
              defaultValue={user?.displayName}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label htmlFor="sellerEmail" className="block font-medium">
              Seller Email
            </label>
            <input
              type="email"
              id="sellerEmail"
              value={seller_email}
              defaultValue={user?.email}
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
            value= "Add Toy"
            className="bg-blue-500 text-white rounded px-4 py-2 font-medium hover:bg-blue-600"
          >
            Add Toy
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddToy;
