import React from "react";

const BilInput = ({ inputBill, setInputBill }) => {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="Bill value"
        value={inputBill}
        onChange={(e) => setInputBill(Number(e.target.value))}
      />
    </div>
  );
};

export default BilInput;
