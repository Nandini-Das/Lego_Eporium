import React from 'react';
import { Link } from 'react-router-dom';

const AllToysTable = ({toys}) => {
    return (
        <div>
             <h1 className="text-3xl font-bold mb-4">All Toys</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
            <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Seller</th>
              <th className="px-4 py-2">Toy Name</th>
              <th className="px-4 py-2">Sub-category</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Available Quantity</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy,_id) => (
              <tr key={_id}>
                
                <td className="px-4 py-2">{toy.seller}</td>
                <td className="px-4 py-2">{toy.name}</td>
                <td className="px-4 py-2">{toy.subcategory}</td>
                <td className="px-4 py-2">${toy.price}</td>
                <td className="px-5 py-2">{toy.available_quantity}</td>
                <td className="px-4 py-2">
                  <Link to={toy._id}> <button className="btn btn-primary">View Details</button></Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default AllToysTable;