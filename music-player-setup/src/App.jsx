import { useState } from 'react'
import MusicPlayer from './components/MusicPlayer'
import SearchBar from './components/SearchBar'
import TrackList from './components/TrackList'
import Loader from './components/Loader'
import ErrorMessage from './components/ErrorMessage'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://api.deezer.com/search?q=${encodeURIComponent(query)}&output=jsonp`);
      const data = await response.json();
      setTracks(data.data);
    } catch (err) {
      setError("Failed to fetch tracks. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handlePlay = (track) => {
    setCurrentTrack(track);
  };

  const handleAddToPlaylist = (track) => {
    setPlaylist((prev) => [...prev, track]);
  console.log("Added to playlist:", track.title);
  };

  return (
    <div className="app-container p-6">
      <SearchBar onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {!loading && !error && (
        <>
          <TrackList 
          tracks={tracks} 
          onPlay={handlePlay} 
          onAddToPlaylist={handleAddToPlaylist} />
          <MusicPlayer currentTrack={currentTrack} />

          {playlist.lenght > 0 && (
            <div className="playlist mt-4">
              <h2 className="text-xl font-bold mb-2">My Playlist</h2>
              <TrackList 
              tracks={playlist} 
              onPlay={handlePlay} 
              onAddToPlaylist={handleAddToPlaylist} />
            </div>
          )}
        </>
      )}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App;
