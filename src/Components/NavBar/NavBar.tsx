import React from 'react';
import CompanyMenu from './CompanyMenu'; 
import './Nav.css'

export const NavBar: React.FC = () => {
  return (
    <header className='nav-header'>
      <h1 className='nav-h1'>RIDESHARE RANGER</h1>
      <CompanyMenu/>
    </header>
  );
}

