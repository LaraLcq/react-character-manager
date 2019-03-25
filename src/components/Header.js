import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => (
    // navbar
    <div>
    <Link className='nav-link' to='/'>Home</Link>
    <Link className='nav-link' to='/edit'>Edit</Link>
    <Link className='nav-link' to='/Create'>Create</Link>
    </div>
)

export default Header;