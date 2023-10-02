import { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducer";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const initialState = {
    isMenuOpen: false,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  let { isMenuOpen } = state;
  return (
    <AppContext.Provider value={{ isMenuOpen, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
