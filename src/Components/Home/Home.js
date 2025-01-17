import React from 'react'
import Booksabout from "./Booksabout";
import Categories from "./Categories";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Newbooks from "./Newbooks";
import './Home.css'

function Home() {
    return (
        <div className='Main'>
            <Navbar />
            <Booksabout />
            <Categories />
            <Newbooks />
            <Footer />
        </div>
    )
}

export default Home