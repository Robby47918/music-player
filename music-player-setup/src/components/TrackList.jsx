import React from "react";
import TrackCard from "./TrackCard";

const TrackList = ({ tracks, onPlay, onAddToPlaylist }) => {
  if (!tracks || tracks.length === 0) {
    return (
      <p className="italic text-gray-500 text-lg bg-white p-6 rounded-lg shadow-md">
        No tracks found
      </p>
    );
  }

  return (
    <div className="grid gap-4 p-6 bg-white rounded-lg shadow-md">
      {tracks.map((track) => (
        <TrackCard
          key={track.id}
          track={track}
          onPlay={onPlay}
          onAddToPlaylist={onAddToPlaylist}
        />
      ))}
    </div>
  );
};

export default TrackList;