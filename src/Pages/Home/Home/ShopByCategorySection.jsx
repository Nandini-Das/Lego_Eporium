import React, { useContext, useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const ShopByCategorySection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [categories, setCategories] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch('http://localhost:5000/toys')
      .then(res => res.json())
      .then(data => setCategories(data));
  }, []);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  const mainCategories = Array.from(new Set(categories.map(category => category.subcategory)));

  const handleViewDetails = (toyId) => {
    if (!user?.email) {
      confirmAlert({
        title: 'Login Required',
        message: 'You have to log in first to view details.',
        buttons: [
          {
            label: 'Login',
            onClick: () => navigate('/login', { state: { from: location.pathname } })
          },
          {
            label: 'Cancel',
            onClick: () => {}
          }
        ]
      });
    } else {
      navigate(`/toys/${toyId}`);
    }
  };

  return (
    <div className="flex justify-center p-4">
      <Tabs selectedIndex={activeTab} onSelect={handleTabChange}>
        <TabList className="flex mb-4">
          {mainCategories.map((category, index) => (
            <Tab
              key={index}
              className={`px-6 py-3 mr-4 text-lg font-medium rounded-lg ${
                activeTab === index ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
              }`}
              onClick={() => handleTabChange(index)}
            >
              {category}
            </Tab>
          ))}
        </TabList>

        <div className="flex justify-center">
          {mainCategories.map((subcategory, index) => (
            <TabPanel key={index}>
              <div className="grid grid-cols-3 gap-4">
                {categories
                  .filter(category => category.subcategory === subcategory)
                  .map((toy, toyIndex) => (
                    <div key={toyIndex} className="border p-4 rounded-lg">
                      <img src={toy.picture} alt={toy.name} className="mb-2" />
                      <h3 className="text-lg font-medium">{toy.name}</h3>
                      <p className="text-gray-600 mb-2">{toy.price}</p>
                      <div className="flex items-center mb-2">
                        <span className="text-yellow-500 mr-1">&#9733;</span>
                        <span>{toy.rating}</span>
                      </div>
                      <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                        onClick={() => handleViewDetails(toy._id)}
                      >
                        View Details
                      </button>
                    </div>
                  ))}
              </div>
            </TabPanel>
          ))}
        </div>
      </Tabs>
    </div>
  );
};

export default ShopByCategorySection;
