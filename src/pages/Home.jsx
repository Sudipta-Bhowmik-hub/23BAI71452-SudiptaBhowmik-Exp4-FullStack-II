import { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppContext } from "../context/AppContext";
import { increment, decrement } from "../features/counterSlice";
import DifficultySelector from "../components/DifficultySelector";

export default function Home() {
  // Context for theme
  const { state, dispatch: contextDispatch } = useContext(AppContext);

  // Redux for counter/game state
  const count = useSelector((state) => state.counter.value);
  const reduxDispatch = useDispatch();

  return (
    <div className="home-container">
      <h1>Welcome to Smart Tic Tac Toe</h1>

      {/* Context usage */}
      <p>Current Theme: {state.theme}</p>
      <button onClick={() => contextDispatch({ type: "TOGGLE_THEME" })}>
        Toggle Theme
      </button>

      {/* Redux usage */}
      <h2>Counter: {count}</h2>
      <button onClick={() => reduxDispatch(increment())}>+</button>
      <button onClick={() => reduxDispatch(decrement())}>-</button>

      <DifficultySelector />
    </div>
  );
}
