import AppContext from "./context";

const AppProvider = (props) => {
  return <AppContext.Provider>{props.children}</AppContext.Provider>;
};

export default AppProvider;
