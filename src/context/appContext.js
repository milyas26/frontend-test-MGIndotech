// React Packages
import { createContext, useReducer } from "react";

export const AppContext = createContext();

const initialState = {
  fav: [],
};

export const AppContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContextProvider value={[state, dispatch]}>
      {props.children}
    </AppContextProvider>
  );
};
