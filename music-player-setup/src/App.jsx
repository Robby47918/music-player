import { useState } from 'react';
import MusicPlayer from './components/MusicPlayer';
import SearchBar from './components/SearchBar';
import TrackList from './components/TrackList';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [playlist, setPlaylist] = useState([]); // ✅ Added playlist state

  const handleSearch = async (query) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${encodeURIComponent(query)}`
      );
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
            onAddToPlaylist={handleAddToPlaylist}
          />
          <MusicPlayer currentTrack={currentTrack} />

          {playlist.length > 0 && ( 
            <div className="playlist mt-4">
              <h2 className="text-xl font-bold mb-2">My Playlist</h2>
              <TrackList
                tracks={playlist}
                onPlay={handlePlay}
                onAddToPlaylist={handleAddToPlaylist}
              />
            </div>
          )}
        </>
      )}

    </div>
  );
}

export default App;