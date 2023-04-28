import React, { useState } from "react";
import AppContext from "./context";

const AppProvider = (props) => {
  // states
  const [trackIndex, setTrackIndex] = useState(0);





  return <AppContext.Provider
    value={{
      trackIndex,
      setTrackIndex,
    }}
  >{props.children}
  </AppContext.Provider>;
};

export default AppProvider;
