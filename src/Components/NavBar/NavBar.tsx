import React from 'react';
import CompanyMenu from './CompanyMenu'; 
import './Nav.css'

export const NavBar: React.FC = () => {
  return (
    <header className='nav-header'>
      <img src='../images/final-logo-with-text.png' alt='logo' className='nav-logo'></img>
      <CompanyMenu/>
    </header>
  );
}

