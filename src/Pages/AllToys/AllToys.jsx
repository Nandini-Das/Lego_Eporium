import React, { useEffect, useState } from 'react';
import AllToysTable from './AllToysTable';

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredToys, setFilteredToys] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/toys')
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setFilteredToys(data.slice(0, 20));
      });
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    const filtered = toys.filter((toy) =>
      toy.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredToys(filtered.slice(0, 20));
  };

  return (
    <div>
     
      <div className="mb-4 p-4">
        <input
          type="text"
          placeholder="Search by toy name"
          value={searchTerm}
          onChange={handleSearch}
          className="border border-gray-300 rounded px-3 py-2"
        />
      </div>
      <AllToysTable toys={filteredToys} />
    </div>
  );
};

export default AllToys;
