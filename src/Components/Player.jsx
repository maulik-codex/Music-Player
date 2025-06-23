import React, { useRef, useState, useEffect } from 'react';
import './Player.css';
import { RxLoop } from 'react-icons/rx';
import { LiaStepBackwardSolid, LiaStepForwardSolid } from 'react-icons/lia';
import { CiPlay1, CiPause1 } from 'react-icons/ci';
import { PiShuffleThin } from 'react-icons/pi';

const formatTime = (seconds) => {
  if (!seconds || isNaN(seconds)) return '0:00';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
};

const Player = ({ song, error, loading }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    setIsPlaying(false);
    setCurrentTime(0);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [song]);

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play();
    } else if (audioRef.current) {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const handlePlayPause = () => {
    if (song && !loading && !error) {
      setIsPlaying((prev) => !prev);
    }
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleSeek = (e) => {
    const value = Number(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = value;
      setCurrentTime(value);
    }
  };

  // Show error or loading
  if (loading) {
    return <div className="player-container"><div className="player-header"><span>Player</span></div><div>Loading...</div></div>;
  }
  if (error) {
    return <div className="player-container"><div className="player-header"><span>Player</span></div><div style={{ color: 'red', padding: 16 }}>{error}</div></div>;
  }

  return (
    <div className="player-container">
      <div className="player-header">
        <span>Player</span>
        <span className="player-options">&#9776;</span>
      </div>
      <div className="player-album-art">
        <img src={song ? 'https://i.imgur.com/8Km9tLL.jpg' : ''} alt="Album Art" />
      </div>
      <div className="player-song-info">
        <h2>{song ? song.song : 'No Song Selected'}</h2>
        <h3>{song ? 'Unknown Artist' : ''}</h3>
        <p>{song ? '' : 'Best Album 2020'}</p>
      </div>
      <div className="player-progress">
        <span>{formatTime(currentTime)}</span>
        <input
          type="range"
          min="0"
          max={song && song.duration ? song.duration : 100}
          value={currentTime}
          onChange={handleSeek}
          disabled={!song}
        />
        <span>{formatTime(song && song.duration ? song.duration : 0)}</span>
      </div>
      <div className="player-controls-section">
        <div className="player-controls">
          <button className="icon-btn"><PiShuffleThin size={22} /></button>
          <button className="icon-btn"><LiaStepBackwardSolid size={26} /></button>
          <button className="icon-btn play-btn" onClick={handlePlayPause} disabled={!song}>
            {isPlaying ? <CiPause1 size={28} /> : <CiPlay1 size={28} />}
          </button>
          <button className="icon-btn"><LiaStepForwardSolid size={26} /></button>
          <button className="icon-btn"><RxLoop size={22} /></button>
        </div>
        <button className="lyrics-btn">Lyrics</button>
      </div>
      {song && (
        <audio
          ref={audioRef}
          src={song.url}
          onTimeUpdate={handleTimeUpdate}
          onEnded={() => setIsPlaying(false)}
        />
      )}
    </div>
  );
};

export default Player; 