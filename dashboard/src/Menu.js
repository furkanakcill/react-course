import React from 'react';

const Menu = ({ menuItems }) => {
  return (
    <ul style={{ backgroundColor: 'black', listStyle: 'none', padding: 0 }}>
      {menuItems.map((item, index) => (
        <li key={index} style={{ color: 'white', padding: '10px' }}>{item}</li>
      ))}
    </ul>
  );
}

export default Menu;
