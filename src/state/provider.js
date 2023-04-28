import React, { useRef, useState } from "react";
import AppContext from "./context";
import { tracks } from "../data/tracks";

const AppProvider = (props) => {
  // states
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profileName, setProfileName] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

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

  return (
    <AppContext.Provider
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
        email,
        setEmail,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        profileName,
        setProfileName,
        day,
        setDay,
        month,
        setMonth,
        year,
        setYear,
        errMessage,
        setErrMessage,
        successMessage,
        setSuccessMessage,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
