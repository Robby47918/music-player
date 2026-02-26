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
    <div className="flex items-center gap-6 p-6 bg-white rounded-lg shadow-lg">
  {currentTrack ? (
    <>
      {/* Album Cover */}
      <img
        src={currentTrack.album.cover_small}
        alt={currentTrack.title}
        className="w-20 h-20 rounded-lg shadow-md"
      />

      {/* Track Info */}
      <div>
        <h3 className="text-lg font-extrabold text-gray-900">
          {currentTrack.title}
        </h3>
        <p className="text-sm italic text-gray-500">
          {currentTrack.artist.name}
        </p>
      </div>

      {/* Play/Pause Button */}
      <button
        onClick={togglePlayPause}
        className="px-6 py-3 rounded-full bg-gray-200 text-gray-800 font-semibold hover:bg-gray-300 transition"
      >
        {isPlaying ? "Pause" : "Play"}
      </button>

      {/* Volume Control */}
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
        className="w-40 h-2 rounded-lg bg-gray-300 accent-gray-800"
      />

      {/* Hidden Audio Element */}
      <audio ref={audioRef}></audio>
    </>
  ) : (
    <p className="italic text-gray-500">Select a track to play</p>
  )}
</div>
  );
};

export default MusicPlayer;