import React from "react";

const ResetButton = ({ handleReset }) => {
  return (
    <div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default ResetButton;
