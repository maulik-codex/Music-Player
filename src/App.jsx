import React from 'react'
import Navbar from './Components/Navbar'
import './App.css'
import { Button, Typography, Box } from '@mui/material'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const App = () => {
  return (
    <div className="app-container">
      <main className="main-content">
        <div className="container fade-in content-with-background-image">
          <Navbar/>
          <Typography variant="h6" className="trending-text">Trending New Hits</Typography>
          <Typography variant="h1" className="song-title">WALLS</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
            <Typography variant="h5" className="artist-name">Louis Tomlinson</Typography>
            <Typography variant="body1" className="play-count">63Million Plays</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <Button variant="contained" className="listen-now-button">Listen Now</Button>
            <Button variant="outlined" className="heart-button">
              <FavoriteBorderOutlinedIcon />
            </Button>
          </Box>
        </div>
      </main>
    </div>
  )
}

export default App