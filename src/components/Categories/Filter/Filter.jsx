import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { FaWater } from "react-icons/fa";

const categories = [
  "men's clothing",
  "women's clothing",
  "jewelery",
  "electronics"
];

export const Filter = ({ onSelectCategory, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showCategories, setShowCategories] = useState(false);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  return (
    <div className="flex justify-end items-center w-full h-30 bg-beige">
      <FaSearch className="m-4 text-greenTextPrincipal" /> 
      <input
        type="text"
        placeholder="Buscar..."
        className="p-2 border border-gray-300 rounded-l-md"
        value={searchTerm}
        onChange={handleSearchChange}
      />

      <div className="relative ml-2">
        <button onClick={toggleCategories} className="p-2 focus:outline-none">
        <FaWater className="m-4 text-greenTextPrincipal" />
        </button>
        {showCategories && (
          <select
            className="absolute top-10 right-0 rounded-md"
            onChange={(e) => onSelectCategory(e.target.value)}
          >
            <option value="">Todas las categorías</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        )}
      </div>
    </div>
  );
};


