import React from 'react'
import './Novel.css'
import Navbar from '../Navbar'
import Footer from '../Footer'
import otkankunlar from './assets/otkankunlar.png';
import dunyoningishlari from './assets/dunyoningishlari.png';
import kechavakunduz from './assets/kechavakunduz.png';
import ulugbekxazinasi from './assets/ulugbekxazinasi.png';
import mexrobdanchayon from './assets/mexrobdanchayon.png';
import dunyoningishlari1 from './audios/dunyoningishlari.mp3'
import kechavakunduz1 from './audios/kechavakunduz1.mp3'
import ulugbekxazinasi1 from './audios/ulugbekxazinasi.mp3'
import mexrobdanchayon1 from './audios/mexrobdanchayon1.mp3'
import dunyoningishlari2 from './audios/mexrobdanchayon2.mp3'
import kechavakunduz2 from './audios/mexrobdanchayon2.mp3'
import ulugbekxazinasi2 from './audios/mexrobdanchayon2.mp3'
import mexrobdanchayon2 from './audios/mexrobdanchayon2.mp3'
import { useNavigate } from 'react-router-dom';


function Novel() {
    const navigate = useNavigate();

    const data = [
        {
            img: otkankunlar,
            name: "O'tkan kunlar",
            author: "Abdulla Qodiriy",

        },
        {
            img: dunyoningishlari,
            name: "Dunyoning ishlari",
            author: "O'tkir Hoshimov",
            parts: [
                { audio: dunyoningishlari1, title: "Part 1" },
                { audio: dunyoningishlari2, title: "Part 2" },
            ],
        },
        {
            img: kechavakunduz,
            name: "Kecha va kunduz",
            author: "Cho'lpon",
            parts: [
                { audio: kechavakunduz1, title: "Part 1" },
                { audio: kechavakunduz2, title: "Part 2" },
            ],
        },
        {
            img: ulugbekxazinasi,
            name: "Ulug'bek xazinasi",
            author: "Odil Yoqubov",
            parts: [
                { audio: ulugbekxazinasi1, title: "Part 1" },
                { audio: ulugbekxazinasi2, title: "Part 2" },
            ],
        },
        {
            img: mexrobdanchayon,
            name: "Mexrobdan chayon",
            author: "Abdulla Qodiriyning",
            parts: [
                { audio: mexrobdanchayon1, title: "Part 1" },
                { audio: mexrobdanchayon2, title: "Part 2" },
            ],
        },
    ];


    const handleListen = (novel) => {
        const selectedNovel = data.find((item) => item.name === novel.name);
        localStorage.setItem('selectedNovel', JSON.stringify(selectedNovel));
        navigate('/Playaudio');
    };

    return (
        <>
            <Navbar />
            <div className='Novels'>
                <h1><span></span>Novels <span></span></h1>

                <div className="novel-card">
                    {
                        data.map((item, index) => (
                            <div className="novel-cart" key={index}>
                                <div className="img-parts">
                                    <img src={item.img} alt="" />
                                </div>
                                <b>{item.name}</b>
                                <span>{item.author}</span>
                                <button onClick={() => handleListen(item)}>Listen</button>
                                <audio src={item.music}></audio>
                            </div>
                        ))
                    }

                </div>
            </div>
            <Footer />
        </>)
}

export default Novel