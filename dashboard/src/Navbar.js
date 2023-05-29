import React from 'react';

const Navbar = ({ title }) => {
  return (
    <nav style={{ backgroundColor: 'darkgray', width: '100%' }}>
      <h1>{title}</h1>
    </nav>
  );
}

export default Navbar;
