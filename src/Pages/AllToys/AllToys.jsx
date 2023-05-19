import React, { useEffect, useState } from 'react';
import AllToysTable from './AllToysTable';

const AllToys = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => setToys(data));
    }, [])
  return (
    <div>
       <AllToysTable key={toys._id} toys={toys}></AllToysTable>
    </div>
  );
};

export default AllToys;