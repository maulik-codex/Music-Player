import React, { useState } from 'react';
import SideBar from './SideBar';
import TopArtists from './TopArtists';
import Navbar from './Components/Navbar';
import './App.css';
import './Components/Navbar.css';
import { Button, Typography, Box } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Genres from './Components/Genres';
import Player from './Components/Player';

const BACKEND_URL = 'http://localhost:5000';

const App = () => {
  const [currentSong, setCurrentSong] = useState(null); // { url, song, duration }
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    setLoading(true);
    setError('');
    setCurrentSong(null);
    try {
      const res = await fetch(`${BACKEND_URL}/api/search?query=${encodeURIComponent(query)}`);
      if (!res.ok) {
        const data = await res.json();
        setError(data.message || 'Song not found.');
        setLoading(false);
        return;
      }
      const data = await res.json();
      setCurrentSong({
        url: `${BACKEND_URL}${data.url}`,
        song: data.song,
        duration: data.duration,
      });
    } catch (e) {
      setError('Error connecting to backend.');
    }
    setLoading(false);
  };

  return (
    <div style={{ display: 'flex' }}>
      <SideBar />
      {/* Your main content goes here */}
      <div style={{ flex: 1, color: '#fff' }}>
        <div className="container fade-in content-with-background-image">
          <Navbar onSearch={handleSearch} loading={loading} />
          <div className="content-in-image">
            <Typography variant="body2" className="trending-text">Trending New Hits</Typography>
            <Typography variant="h1" className="song-title">Welcome to New York</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
              <Typography variant="h5" className="artist-name">Taylor Swift</Typography>
              <Typography variant="body1" className="play-count">63 Million Plays</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              <Button variant="contained" className="listen-now-button">Listen Now</Button>
              <Button variant="outlined" className="heart-button">
                <FavoriteBorderOutlinedIcon />
              </Button>
            </Box>
          </div>
        </div>
        <div className="app-container">
          <main className="main-content">
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 32 }}>
              <TopArtists />
              <Player song={currentSong} error={error} loading={loading} />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
