import React from 'react'
import './Booksabout.css'
import book4 from './assets/imomningmanikenqizi.jpeg'
import book5 from './assets/sohilsizdengiz.png'

function Booksabout() {
    return (
        <div className='Booksabout'>
            <div className="about-part">
                <h2>Explore the World of Books</h2>
                <p>Reading opens the door to knowledge and inspiration. Discover books that captivate your mind and enrich your soul with new ideas. Every page is an adventure, and every word holds wisdom. Dive into our specially curated collection just for you!</p>
            </div>
            <div className="img-part">
                <img src={book4} alt="..." />
                <img src={book5} alt="..." />
            </div>
        </div>
    )
}

export default Booksabout