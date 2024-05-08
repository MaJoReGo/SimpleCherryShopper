import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="flex justify-center items-center w-full h-20 bg-beige">
      <ul className="flex">
        <li className="mr-6">
        <NavLink className="flex text-6 font-bold text-greenTextPrincipal" to={'/'}>PaginaPrincipal</NavLink><li/>
        </li>
        <li className="mr-6">
        <NavLink className="flex text-6 font-bold text-greenTextPrincipal" to={'/Us'}>Nosotros</NavLink><li/>
        </li>
        <li className="mr-6">
        <NavLink className="flex text-6 font-bold text-greenTextPrincipal" to={'/Categories'}>Categorias</NavLink><li/>
        </li>
        <li>
        <NavLink className="flex text-6 font-bold text-greenTextPrincipal" to={'/Shopping'}>Carrito</NavLink><li/>
        </li>
      </ul>
    </nav>
  );
};