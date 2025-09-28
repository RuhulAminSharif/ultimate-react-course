import React from "react";

const OutputBill = ({ inputBill, tip }) => {
  return (
    <div>
      <h3>
        You pay ${inputBill + tip} (${inputBill} + ${tip} tip)
      </h3>
    </div>
  );
};

export default OutputBill;
