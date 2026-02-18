import React from "react";

function Square({ value, onClick }) {
  return (
    <button className="square-btn" onClick={onClick}>
      {value}
    </button>
  );
}

// ✅ React.memo prevents unnecessary re-renders
export default React.memo(Square);
