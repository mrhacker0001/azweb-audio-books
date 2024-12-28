import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import logo from './Home/assets/audiobooklogo.png';
import favourite from './Home/assets/favourite (1).png';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from './Redux/navbarSlice';

function Navbar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const searchPanelRef = useRef(null);

    useEffect(() => {
        const novelsData = JSON.parse(localStorage.getItem('novelsData'));
        if (novelsData) {
            setSearchResults(novelsData);
        }
    }, []);

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchText(value);

        const novelsData = JSON.parse(localStorage.getItem('novelsData')) || [];
        const filteredBooks = novelsData.filter((book) =>
            book.name.toLowerCase().includes(value.toLowerCase()) ||
            book.author.toLowerCase().includes(value.toLowerCase())
        );
        setSearchResults(filteredBooks);
    };

    const handleTagClick = (page) => {
        dispatch(setCurrentPage(page));
    };

    const handleBookClick = (book) => {
        // Redirect to the selected book's page
        localStorage.setItem('selectedNovel', JSON.stringify(book));
        navigate('/Playaudio');
        setSearchResults([]); // Close search results after selection
        setSearchText(''); // Clear the search input after selection
    };

    const handleClickOutside = (event) => {
        if (searchPanelRef.current && !searchPanelRef.current.contains(event.target)) {
            setSearchResults([]); // Hide search results if clicked outside
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

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
                <div className="search-panel" ref={searchPanelRef}>
                    <input
                        type="text"
                        name="text"
                        placeholder="Search by title or author..."
                        value={searchText}
                        onChange={handleSearch}
                    />
                    {/* Display search results only when searchText has value */}
                    {searchText && searchResults.length > 0 && (
                        <div className="search-results">
                            {searchResults.map((book, index) => (
                                <div key={index} className="search-item" onClick={() => handleBookClick(book)}>
                                    <img src={book.img} alt={book.name} />
                                    <div>
                                        <h4>{book.name}</h4>
                                        <p>{book.author}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <img src={favourite} alt="Favourite" />
            </div>
        </div>
    );
}

export default Navbar;
