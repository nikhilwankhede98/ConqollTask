import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    
        return (
            <div className='nav'>
                <nav className='navbar'>
                    <div className='logo'>
                        
                        <a href="#" id="logo"><span className='logo-c'>C</span>ONQOLL</a>
                    </div>

                    <ul className='nav-items'>
                        <li>
                            <Link to='/'><span className='text'>Home</span></Link>
                        </li>
                        <li>
                            <Link to='/all'><span className='text'>All</span></Link>
                        </li>

                        <li>
                            <Link to='/shortlisted'><span className='text'>Shortlisted</span></Link>
                        </li>
                    </ul>
                </nav> 
            </div>
            
            
        
        )
    
}

export default Navbar
