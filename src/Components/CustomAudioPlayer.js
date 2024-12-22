import React, { useEffect, useRef, useState } from 'react'
import './CustomAudioPlayer.css'
import img from './assets/alvido.png'

const CustomAudioPlayer = ({ audioSrc }) => {
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)
    const audioRef = useRef(null)

    const handleSeek = (e) => {
        audioRef.current.currentTime = e.target.value;
        setCurrentTime(e.target.value);
    }

    const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
        setDuration(audioRef.current.duration);
    }

    const handlePlayPause = () => {
        if (isPlaying) {
            handlePause();
        } else {
            handlePlay()
        }
    };

    function formatDuration(durationSeconds) {
        const minutes = Math.floor(durationSeconds / 60);
        const seconds = Math.floor(durationSeconds % 60);
        const formattedSeconds = seconds.toString().padStart(2, "0");
        return `${minutes}:${formattedSeconds}`;
    };

    const handlePlay = () => {
        audioRef.current.play();
        setIsPlaying(true);
    }

    const handlePause = () => {
        audioRef.current.pause();
        setIsPlaying(false)
    }

    useEffect(() => {
        audioRef.current.addEventListener("timeupdate", handleTimeUpdate);


        return () => {
            audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
        };
    }, []);


    return (
        <div className='CustomAudioPlayer'>
            <img src={img} alt="..." />
            <input
                type='range'
                min={0}
                max={duration}
                value={currentTime}
                onChange={handleSeek}
            />

            <audio ref={audioRef} src={audioSrc} />

            <div className="track-duration">
                <p>{formatDuration(currentTime)}</p>
                <p>{formatDuration(duration)}</p>
            </div>

            <button onClick={handlePlayPause}>
                <span class='material-symbols-rounded'>
                    {isPlaying ? "pause" : "play_arrow"}
                </span>
            </button>
        </div>
    )
}

export default CustomAudioPlayer