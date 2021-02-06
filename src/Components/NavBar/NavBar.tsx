import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

export const NavBar: React.FC = () => {
  const [open, setOpen] = React.useState(false); // used for the drawer opening and closing

  return (
    <header className='nav-header'>
      <img src='../images/logo2.png' alt='logo' className='nav-logo'></img>
      <Link className='nav-link' to='/doordash'>
        <span className='icon-btn'>DoorDash</span>
      </Link>
      <Link className='nav-link' to='/uber-eats'>
        <span className='icon-btn'>Uber Eats</span>
      </Link>
      <Link className='nav-link' to='/grubhub'>
        <span className='icon-btn'>Grubhub</span>
      </Link>
      <Link className='nav-link' to='/postmates'>
        <span className='icon-btn'>Postmates</span>
      </Link>
      <Link className='nav-link' to='/instacart'>
        <span className='icon-btn'>Instacart</span>
      </Link>
    </header>
  );
}

