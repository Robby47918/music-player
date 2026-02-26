import React, { useRef, useState, useEffect } from "react";

const MusicPlayer = ({ currentTrack }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    if (currentTrack && audioRef.current) {
      audioRef.current.src = currentTrack.preview;
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [currentTrack]);

  const togglePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <div className="flex items-center gap-4 p-4 bg-gray-100 rounded">
      {currentTrack ? (
        <>
          <img
            src={currentTrack.album.cover_small}
            alt={currentTrack.title}
            className="w-16 h-16 rounded"
          />
          <div>
            <h3 className="font-bold">{currentTrack.title}</h3>
            <p className="text-sm text-gray-600">{currentTrack.artist.name}</p>
          </div>
          <button
            onClick={togglePlayPause}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            {isPlaying ? "Pause" : "Play"}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
          />
          <audio ref={audioRef}></audio>
        </>
      ) : (
        <p className="text-gray-600">Select a track to play</p>
      )}
    </div>
  );
};

export default MusicPlayer;