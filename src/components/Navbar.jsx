import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

  return (
    <div >
      <div>
        <div  >
          Invoice Dashboard
        </div>
        <button component={Link} to="/">
          Dashboard
        </button>
        <button  component={Link} to="/addinvoice">
          Add Invoice
        </button>
      </div>
    </div>
  );
}

export default Navbar;
