import React, { useState } from "react";
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
  const [gender, setGender] = useState("");
  const [topPicks, setTopPicks] = useState([]);
  const [recentlyPlayed, setRecentlyPlayed] = useState([]);
  const [newRelease, setNewRelease] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <AppContext.Provider
      value={{
        trackIndex,
        setTrackIndex,
        currentTrack,
        setDuration,
        duration,
        setTimeProgress,
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
        gender,
        setGender,
        topPicks,
        setTopPicks,
        recentlyPlayed,
        setRecentlyPlayed,
        newRelease,
        setNewRelease,
        playlist,
        setPlaylist,
        isLoading,
        setIsLoading,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
