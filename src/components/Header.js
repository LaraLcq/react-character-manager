import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => (
    // navbar

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Character Manager</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
    <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
      <Link className='nav-link' to='/'>Home</Link>
      </li>
      <li class="nav-item">
      <Link className='nav-link' to='/Create'>Create</Link>
      </li>
    </ul>
  </div>
</nav>
   
)

export default Header;