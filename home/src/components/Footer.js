import React from 'react';

const Footer = () => (
  <footer className="bg-gray-800 text-white py-4">
    <div className="wrapper">
    <div className="container mx-auto text-center">
      <div className="social-links mb-4">
        <a href="https://twitter.com/dhirajY08" className="mx-2 text-white hover:text-gray-400">
          <i className="fab fa-twitter fa-2x"></i>
        </a>
        <a href="https://linkedin.com/in/dhirajyadav08" className="mx-2 text-white hover:text-gray-400">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://github.com/dhiraj-ydv" className="mx-2 text-white hover:text-gray-400">
          <i className="fab fa-github fa-2x"></i>
        </a>
      </div>
    </div>
    </div>
  </footer>
);

export default Footer;
