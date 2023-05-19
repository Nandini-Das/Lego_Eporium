import React, { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopByCategorySection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  const categories = [
    {
      title: 'Lego Cars',
      subcategories: ['card1', 'Card 2', 'card 3'],
    },
    {
      title: 'Category 2',
      subcategories: ['Subcategory 4', 'Subcategory 5', 'Subcategory 6'],
    },
    {
      title: 'Category 3',
      subcategories: ['Subcategory 7', 'Subcategory 8', 'Subcategory 9'],
    },
    {
      title: 'Category 4',
      subcategories: ['Subcategory 10', 'Subcategory 11', 'Subcategory 12'],
    },
  ];

  return (
    <div className="p-4">
      <Tabs>
        <TabList className="flex mb-4">
          {categories.map((category, index) => (
            <Tab
              key={index}
              className={`px-6 py-3 mr-4 text-lg font-medium rounded-lg ${
                activeTab === index ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
              }`}
              onClick={() => handleTabChange(index)}
            >
              {category.title}
            </Tab>
          ))}
        </TabList>

        {categories.map((category, index) => (
          <TabPanel key={index}>
            
            <div className="grid grid-cols-3 gap-4">
              {category.subcategories.map((subcategory, subIndex) => (
                <div
                  key={subIndex}
                  className="p-4 bg-white rounded-lg shadow-lg"
                >
                  {/* Add content for subcategory card */}
                  <h3 className="text-lg font-bold">{subcategory}</h3>
                  {/* Add additional card content here */}
                </div>
              ))}
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default ShopByCategorySection;
