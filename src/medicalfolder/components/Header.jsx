import React from 'react';
import logo from './images/affordmed_logo.jpeg';
const Header = () => {
  return (
    
      <div className='HeaderSection'>
        <div className='left'>
          <div className="title">
          <img src={logo} alt="Affordmed Logo" className="logo" /> Affordmed
          </div>
        </div>
        <div className='center'>
          <ul>
            <li>About Us</li>
            <li>Inventory</li>
            <li>Events</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    
  
  );
}

export default Header;
