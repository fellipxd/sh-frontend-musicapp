import { createContext } from "react";

const AppContext = createContext({
  // initialize the default values for the context here
  tracks: [],
  trackIndex: 0,
  setTrackIndex: () => { },
  // add other values you need to share here
})

export default AppContext;
