
import { useContext, useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { tracks } from "../../data/tracks";
import AppContext from "../../state/context";

export default function MusicPlayer() {
  const {
    trackIndex,
    setTrackIndex
  } = useContext(AppContext);

  const handleClickPrevious = () => {
    setTrackIndex((currentTrack) =>
      currentTrack === 0 ? tracks.length - 1 : currentTrack - 1
    );
  };

  const handleClickNext = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < tracks.length - 1 ? currentTrack + 1 : 0
    );
  };


  return (
    <div className="controler">
      <AudioPlayer
        style={{ boxShadow: "none", color: "white", background: "transparent", }}
        src={tracks[trackIndex].src}
        onPlay={(e) => console.log(tracks[trackIndex].title)}
        showSkipControls={true}
        showJumpControls={false}
        header={`Now playing: ${tracks[trackIndex].title}`}
        onClickPrevious={handleClickPrevious}
        onClickNext={handleClickNext}
        onEnded={handleClickNext}
      />
    </div>
  );
}
