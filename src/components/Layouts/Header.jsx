import React from 'react';
import image1 from '../../assets/images/img10.png';
import image2 from '../../assets/images/img8.png';
import image3 from '../../assets/images/img7.png';
import image4 from '../../assets/images/img6.png';

export const Header = () => {
  return (
    <header className="flex justify-between items-center w-full h-40 bg-pinkPrincipal">
      <img src={image1} alt="FirstImage" className="object-contain h-full" />
      <img src={image2} alt="SecondImage" className="object-contain h-full ml-20" />
      <h1 className="text-3xl font-bold text-beige">SimpleCherryShopper</h1>
      <img src={image3} alt="SecondImage" className="object-contain h-full" />
      <img src={image4} alt="SecondImage" className="object-contain h-full ml-20" />
    </header>
  );
};


