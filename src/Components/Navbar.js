import React, { useState, useEffect, useRef, useMemo } from 'react';
import './Navbar.css';
import logo from './Home/assets/audiobooklogo.png';
import favourite from './Home/assets/favourite (1).png';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from './Redux/navbarSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import locale from "../Components/localisation/locale.json";
import { setLang } from "../Components/Redux/lang";
import { useStoreState } from "../Components/Redux/selector";




function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const searchPanelRef = useRef(null);
    const states = useStoreState();
    const langData = useMemo(() => locale[states.lang], [states.lang]);



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
        <>
            <div className="Navbar">
                <img src={logo} alt="Logo" className='logo-nav' />

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
                    <select
                        className='language'
                        value={states.lang}
                        onChange={(e) => dispatch(setLang(e.target.value))}
                    >
                        <option value="uz">UZ</option>
                        <option value="en">EN</option>
                    </select>
                </div>
            </div>





            <div className="navbar-media">
                <img src={logo} alt="Logo" className='logo-nav-media' />

                <div className="right-cart-media">
                    <div className="search-panel-media" ref={searchPanelRef}>
                        <input
                            type="text"
                            name="text"
                            placeholder="Search by title or author..."
                            value={searchText}
                            onChange={handleSearch}
                        />
                        {/* Display search results only when searchText has value */}
                        {searchText && searchResults.length > 0 && (
                            <div className="search-results-media">
                                {searchResults.map((book, index) => (
                                    <div key={index} className="search-item-media" onClick={() => handleBookClick(book)}>
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
                    <select
                        className='language'
                        value={states.lang}
                        onChange={(e) => dispatch(setLang(e.target.value))}
                    >
                        <option value="uz">UZ</option>
                        <option value="en">EN</option>
                    </select>
                </div>

                <button className="menu-icon" onClick={() => setShowMenu(!showMenu)}>
                    <FontAwesomeIcon icon={showMenu ? faTimes : faBars} className='icon' />
                </button>



                <div className={`mobile-menu ${showMenu ? 'open' : ''}`}>
                    <img src={logo} alt="Logo" className='logo-mobile-media' />

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
            </div>
        </>
    );
}

export default Navbar;
