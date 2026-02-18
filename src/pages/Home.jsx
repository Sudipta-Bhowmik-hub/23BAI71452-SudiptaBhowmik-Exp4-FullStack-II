import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import DifficultySelector from "../components/DifficultySelector";

export default function Home() {
  const { state, dispatch } = useContext(AppContext);

  return (
    <div className="home-container">
      <h1>Welcome to Smart Tic Tac Toe</h1>
      <p>Current Theme: {state.theme}</p>
      <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
        Toggle Theme
      </button>
      <DifficultySelector />
    </div>
  );
}
