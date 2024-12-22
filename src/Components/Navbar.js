import React from 'react';
import './Navbar.css';
import logo from './Home/assets/audiobooklogo.png';
import favourite from './Home/assets/favourite (1).png';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from './Redux/navbarSlice';


function Navbar() {

    const dispatch = useDispatch();

    const handleTagClick = (page) => {
        dispatch(setCurrentPage(page));
    };


    return (
        <div className="Navbar">
            <img src={logo} alt="Logo" />

            <div className="texts">
                <span>
                    <NavLink to="/" onClick={() => handleTagClick('Home')}>Home</NavLink>
                </span>
                <span>
                    <NavLink to="/Signin" onClick={() => handleTagClick('Signin')}>Sign in</NavLink>
                </span>
                <span>
                    <NavLink to="/Category" onClick={() => handleTagClick('Category')}>Categories</NavLink>
                </span>
                <span>
                    <NavLink to="/Profile" onClick={() => handleTagClick('Profile')}>Profile</NavLink>
                </span>
            </div>

            <div className="right-cart">
                <div className="search-panel">
                    <input type="text" name="text" placeholder="Search..." />
                </div>
                <img src={favourite} alt="Favourite" />
            </div>
        </div>
    );
}

export default Navbar;
