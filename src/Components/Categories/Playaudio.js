import React, { useState, useRef } from 'react';
import './Playaudio.css';
import Navbar from '../Navbar';
import Footer from '../Footer';

function Playaudio() {
    const [currentTrack, setCurrentTrack] = useState(null);
    const [audioStates, setAudioStates] = useState(
        [] // Har bir audio uchun alohida vaqt va davomiylikni boshqarish
    );

    const audioRefs = useRef([]);

    const handlePlayPause = (index) => {
        if (currentTrack === index) {
            audioRefs.current[index].pause();
            setCurrentTrack(null);
        } else {
            if (currentTrack !== null) {
                audioRefs.current[currentTrack].pause();
            }
            audioRefs.current[index].play();
            setCurrentTrack(index);
        }
    };

    const handleSeek = (index, value) => {
        audioRefs.current[index].currentTime = value;
        setAudioStates((prevStates) =>
            prevStates.map((state, i) =>
                i === index ? { ...state, currentTime: value } : state
            )
        );
    };

    const handleTimeUpdate = (index) => {
        const audio = audioRefs.current[index];
        setAudioStates((prevStates) =>
            prevStates.map((state, i) =>
                i === index
                    ? { ...state, currentTime: audio.currentTime, duration: audio.duration }
                    : state
            )
        );
    };

    // LocalStorage'dan ma'lumotni olish
    const selectedNovel = JSON.parse(localStorage.getItem('selectedNovel'));

    if (!selectedNovel || !selectedNovel.parts) {
        return <div>Tanlangan kitob ma'lumotlari topilmadi.</div>;
    }

    // Har bir audio uchun dastlabki holatni o'rnatish
    if (audioStates.length === 0) {
        setAudioStates(
            selectedNovel.parts.map(() => ({ currentTime: 0, duration: 0 }))
        );
    }

    return (
        <>
            <Navbar />
            <h1 className='nov'><span></span> {selectedNovel.name} <span></span></h1>
            <div className="Playaudio">
                {selectedNovel.parts.map((part, index) => (
                    <div className="Playaudio-part" key={index}>
                        <img src={selectedNovel.img} alt={selectedNovel.name} />
                        <h3>Qism: {index + 1}</h3>
                        <input
                            type="range"
                            min="0"
                            max={audioStates[index]?.duration || 0}
                            value={audioStates[index]?.currentTime || 0}
                            onChange={(e) => handleSeek(index, e.target.value)}
                        />
                        <audio
                            ref={(el) => (audioRefs.current[index] = el)}
                            src={part.audio}
                            onTimeUpdate={() => handleTimeUpdate(index)}
                        />
                        <div className="track-duration">
                            <p>{formatDuration(audioStates[index]?.currentTime || 0)}</p>
                            <p>{formatDuration(audioStates[index]?.duration || 0)}</p>
                        </div>
                        <button onClick={() => handlePlayPause(index)}>
                            <span className="material-symbols-rounded">
                                {currentTrack === index ? 'pause' : 'play_arrow'}
                            </span>
                        </button>
                    </div>
                ))}
            </div>
            <Footer />
        </>
    );
}

function formatDuration(durationSeconds) {
    const minutes = Math.floor(durationSeconds / 60);
    const seconds = Math.floor(durationSeconds % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
}

export default Playaudio;
