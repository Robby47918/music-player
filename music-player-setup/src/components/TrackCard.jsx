import React from "react";

const TrackCard = ({ track, onPlay, onAddToPlaylist }) => {
  return (
    <div className="track-card flex items-center gap-4 p-2 border-b">
      {/* Album Art */}
      <img
        src={track.album.cover_small}
        alt={`${track.title} cover`}
        className="w-16 h-16 rounded"
      />

      {/* Track Info */}
      <div className="flex-1">
        <h3 className="font-bold">{track.title}</h3>
        <p className="text-sm text-gray-600">{track.artist.name}</p>
      </div>
      
         {/* Action Buttons */}
      <div className="flex gap-2">
        <button
          onClick={() => onPlay(track)}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          Play
        </button>
        <button
          onClick={() => onAddToPlaylist(track)}
          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
        >
          + Playlist
        </button>
      </div>
    </div>
  );
};

export default TrackCard;