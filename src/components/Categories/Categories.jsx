import React from 'react';
import { product } from './products'; 
import { Filter } from './Filter/Filter';

export const Categories = () => {
  return (
    <div>
        <Filter/>
      <h2>Lista de Productos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {product.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow-md p-6">
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4" />
            <h3 className="text-xl font-bold mb-2">{product.title}</h3>
            <p className="text-gray-700 mb-2">${product.price}</p>
            <p className="text-gray-600">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

