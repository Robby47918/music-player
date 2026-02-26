import React from "react";
import TrackCard from "./TrackCard";

const TrackList = ({ tracks, onPlay, onAddToPlaylist }) => {
  if (!tracks || tracks.length === 0) {
    return <p className="text-purple-600 italic text-lg">No tracks found</p>;
  }

  return (
    <div className="track-list">
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