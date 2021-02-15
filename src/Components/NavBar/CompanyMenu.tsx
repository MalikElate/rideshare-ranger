import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import './Nav.css'; 
import { AiOutlineMenu } from 'react-icons/ai'; 

const CompanyMenu: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
      <AiOutlineMenu size="2em"/>
    </Button>
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      <MenuItem onClick={handleClose}>
        <Link className='nav-link' to='/doordash'>DoorDash</Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link className='nav-link' to='/uber-eats'>Uber Eats</Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link className='nav-link' to='/grubhub'>Grubhub</Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link className='nav-link' to='/postmates'>Postmates</Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link className='nav-link' to='/instacart'>Instacart</Link> 
      </MenuItem>
    </Menu>
  </>
  );
}
        

export default CompanyMenu; 