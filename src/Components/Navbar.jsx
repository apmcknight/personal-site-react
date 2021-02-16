import React from 'react';

function Navbar() {
  return (
    <div className="Navbar">
      <a href="/">
        <h1>Adam McKnight</h1>
      </a>
      <div className="links">
        <a href="/work/">Work</a>
        <a href="/blog/">Blog</a>
        <a href="/contact">Contact</a>
      </div>
      
    </div>
  );
}

export default Navbar;
