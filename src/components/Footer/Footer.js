import React from 'react';
import './Footer.css';  // Import the footer styles

function Footer() {
  return (
    <footer className='footer'>
     &copy; Shop Ease {new Date().getFullYear()}
    </footer>
  );
}

export default Footer;
