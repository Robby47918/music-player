import { useState, useEffect } from 'react';
import MusicPlayer from './components/MusicPlayer';
import SearchBar from './components/SearchBar';
import TrackList from './components/TrackList';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import './App.css';

function App() {
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null); // fixed typo
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [playlist, setPlaylist] = useState([]); 
  const [darkMode, setDarkMode] = useState(false);

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

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 drop-shadow-lg tracking-wide">
        Musically</h1>
        <h3 className="text-lg text-indigo-500 mb-6 font-bold italic">Your Ultimate Music Player</h3>
      <div className="app-container p-15">
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
                <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 tracking-tight drop-shadow-md">My Playlist</h2>
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
    </>
  );
}

export default App;
