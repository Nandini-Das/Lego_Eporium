import React, { useEffect, useState } from 'react';
import AllToysTable from './AllToysTable';

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredToys, setFilteredToys] = useState([]);
  const [showAllToys, setShowAllToys] = useState(false);

  useEffect(() => {
    fetch('https://assignment-11-toy-marketplace-server-gules.vercel.app/toys')
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

  const handleSeeMore = () => {
    setShowAllToys(true);
    setFilteredToys(toys);
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
      {!showAllToys && (
        <button onClick={handleSeeMore} className="bg-green-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 ">
          See More
        </button>
      )}
    </div>
  );
};

export default AllToys;
