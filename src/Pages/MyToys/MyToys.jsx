import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

import UpdateToy from './UpdateToy';
import { Link } from 'react-router-dom';

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [sortOrder, setSortOrder] = useState('ascending');
  
  console.log(toys)
  useEffect(() => {
    fetch(`http://localhost:5000/toys?${user?.email}&sort=${sortOrder}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      });
  }, [user, sortOrder]);

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };


  const handleDelete = (_id) => {
    const proceed = confirm('Are You sure you want to delete');
    if (proceed) {
        fetch(`http://localhost:5000/toys/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert('deleted successful');
                    const remaining = toys.filter(toy => toy._id !== _id);
                    setToys(remaining);
                }
            })
    }
  };

  const sortedToys = [...toys].sort((a, b) => {
    if (sortOrder === 'ascending') {
      return a.price - b.price;
    } else if (sortOrder === 'descending') {
      return b.price - a.price;
    }
    return 0;
  });

  const filteredToys = sortedToys.filter((toy) => toy.seller_email === user.email);

  return (
    <div>
      <div className="flex items-center mb-4">
        <span className="mr-2">Sort By:</span>
        <select
          className="border border-gray-300 rounded px-2 py-1"
          value={sortOrder}
          onChange={handleSortChange}
        >
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </div>
      {filteredToys.length > 0 ? (
        <table className="table table-zebra table-bordered">
          <thead>
            <tr>
            <th>#</th>
              <th>Toy Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredToys.map((item, index) => (
              <tr >
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.available_quantity}</td>
                <td>{item.detail_description}</td>
                <td>
               <Link to={`/updateToy/${item._id}`}> <button className="btn btn-sm btn-primary ml-2" variant="primary">
                   Update
                  </button></Link>
                 
                </td>
                <td>
                  {" "}
                  <button className="btn btn-sm btn-danger ml-2" onClick={() => handleDelete(item._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No toys available.</p>
      )}
      
    </div>
  );
};

export default MyToys;
