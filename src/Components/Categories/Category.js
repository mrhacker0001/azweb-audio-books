import React from 'react';
import './Category.css';
import Navbar from '../Navbar';
import Footer from '../Footer';
import novel from './assets/writing.png';
import Poetry from './assets/poetry.png';
import ShortStories from './assets/reading-book.png';
import Plays from './assets/clapperboard.png';
import ScienceFiction from './assets/artificial-intelligence.png';
import MagicalRealism from './assets/magical.png';
import { useNavigate } from 'react-router-dom';

function Category() {
    const navigate = useNavigate();

    const data = [
        { img: novel, name: 'Novel', description: 'Extended fictional narratives that delve into characters, plots, and themes, often spanning significant timeframes.', route: '/novel' },
        { img: Poetry, name: 'Poetry', description: 'Artistic expressions through rhythmic and evocative language, often exploring emotions and ideas.', route: '/poetry' },
        { img: ShortStories, name: 'Short Stories', description: 'Brief fictional tales focused on a single event, theme, or character.', route: '/short-stories' },
        { img: Plays, name: 'Plays', description: 'Dramatic works intended for performance, featuring dialogue and stage directions.', route: '/plays' },
        { img: ScienceFiction, name: 'Science Fiction', description: 'Stories exploring futuristic technology, space exploration, or scientific advancements, often set in imaginative worlds.', route: '/science-fiction' },
        { img: MagicalRealism, name: 'Magical Realism', description: 'A genre blending the ordinary with magical elements, creating a surreal yet realistic narrative.', route: '/magical-realism' },
    ];

    return (
        <div className="Category">
            <Navbar />
            <h1><p></p>Categories<p></p></h1>
            <div className="categories-part">
                {data.map((item, index) => (
                    <div
                        className="category-card"
                        key={index}
                        onClick={() => navigate(item.route)}
                    >
                        <img src={item.img} alt="..." />
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default Category;
