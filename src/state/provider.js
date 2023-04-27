import React, { useRef, useState } from "react";
import AppContext from "./context";
import { tracks } from '../data/tracks';

const AppProvider = (props) => {
  // states
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(
    tracks[trackIndex]
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  // reference
  const audioRef = useRef();
  const progressBarRef = useRef();

  const handleNext = () => {
    if (trackIndex >= tracks.length - 1) {
      setTrackIndex(0);
      setCurrentTrack(tracks[0]);
    } else {
      setTrackIndex((prev) => prev + 1);
      setCurrentTrack(tracks[trackIndex + 1]);
    }
  };




  return <AppContext.Provider
    value={{
      currentTrack,
      audioRef,
      setDuration,
      progressBarRef,
      handleNext,
      duration,
      setTimeProgress,
      trackIndex,
      setTrackIndex,
      setCurrentTrack,
      timeProgress,
      isPlaying,
      setIsPlaying
    }}
  >{props.children}
  </AppContext.Provider>;
};

export default AppProvider;
