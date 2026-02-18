import { useContext, useMemo } from "react";
import { AppContext } from "../context/AppContext";

export default function Analytics() {
  const { state } = useContext(AppContext);

  // ✅ useMemo optimizes derived data calculation
  const summary = useMemo(() => {
    const total = state.gamesPlayed;
    const xRatio = total > 0 ? ((state.xWins / total) * 100).toFixed(1) : 0;
    const oRatio = total > 0 ? ((state.oWins / total) * 100).toFixed(1) : 0;

    return {
      total,
      xWins: state.xWins,
      oWins: state.oWins,
      xRatio,
      oRatio,
    };
  }, [state.gamesPlayed, state.xWins, state.oWins]);

  return (
    <div className="analytics-container">
      <h2>Game Analytics</h2>
      <p>Total Games Played: {summary.total}</p>
      <p>X Wins: {summary.xWins} ({summary.xRatio}%)</p>
      <p>O Wins: {summary.oWins} ({summary.oRatio}%)</p>
      <p>Theme: {state.theme}</p>
    </div>
  );
}
