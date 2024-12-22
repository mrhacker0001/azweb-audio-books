import React from 'react'
import Booksabout from "./Booksabout";
import Categories from "./Categories";
// import CustomAudioPlayer from "./CustomAudioPlayer";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Newbooks from "./Newbooks";
// import audioFile from './audios/01. Imomning maneken qizi.mp3';

function Home() {
    return (
        <div className='Main'>
            <Navbar />
            <Booksabout />
            <Categories />
            <Newbooks />
            <Footer />
            {/* <CustomAudioPlayer audioSrc={audioFile} /> */}
        </div>
    )
}

export default Home