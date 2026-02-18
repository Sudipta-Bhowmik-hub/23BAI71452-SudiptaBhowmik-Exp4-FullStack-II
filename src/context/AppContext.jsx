import React, { createContext, useReducer } from "react";

export const AppContext = createContext();

const initialState = {
  theme: "light",
  gamesPlayed: 0,
  xWins: 0,
  oWins: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    case "INCREMENT_GAMES":
      return { ...state, gamesPlayed: state.gamesPlayed + 1 };
    case "X_WIN":
      return { ...state, xWins: state.xWins + 1 };
    case "O_WIN":
      return { ...state, oWins: state.oWins + 1 };
    default:
      return state;
  }
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
