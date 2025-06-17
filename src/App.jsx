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
          </div>
      </main>
    </div>
  )
}

export default App