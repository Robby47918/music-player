import React from "react";

const TrackCard = ({ track, onPlay, onAddToPlaylist }) => {
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition border border-gray-200">
      {/* Album Art */}
      <img
        src={track.album.cover_small}
        alt={`${track.title} cover`}
        className="w-16 h-16 rounded-lg shadow-sm"
      />

      {/* Track Info */}
      <div className="flex-1">
        <h3 className="text-lg font-bold text-gray-900">{track.title}</h3>
        <p className="text-sm italic text-gray-500">{track.artist.name}</p>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2">
        <button
          onClick={() => onPlay(track)}
          className="px-4 py-2 rounded-lg bg-gray-200 text-gray-800 font-semibold hover:bg-gray-300 transition"
        >
          Play
        </button>
        <button
          onClick={() => onAddToPlaylist(track)}
          className="px-4 py-2 rounded-lg bg-gray-200 text-gray-800 font-semibold hover:bg-gray-300 transition"
        >
          + Playlist
        </button>
      </div>
    </div>
  );
};

export default TrackCard;