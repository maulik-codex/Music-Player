import React from 'react';
import SideBar from './SideBar';
import TopArtists from './TopArtists';
function App() {
  return (
    <div style={{ display: 'flex' }}>
      <SideBar />
      {/* Your main content goes here */}
      <div style={{ flex: 1, background: '#181818', minHeight: '100vh', color: '#fff', padding: 24 }}>
        {/* Example main content */}
        <h1>Welcome to Groovy!</h1>
        <p>Your music, playlists, and more.</p>
        <TopArtists />
      </div>
    </div>
      );  
      }
      export default App; 