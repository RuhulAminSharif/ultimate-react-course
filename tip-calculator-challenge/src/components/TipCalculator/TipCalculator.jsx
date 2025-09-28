import React, { useState } from "react";
import BilInput from "../BilInput/BilInput";
import SelectPercentage from "../SelectPercentage/SelectPercentage";
import OutputBill from "../BillOutput/OutputBill";
import ResetButton from "../Reset/ResetButton";

const TipCalculator = () => {
  const [inputBill, setInputBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = inputBill * ((percentage1 + percentage2) / 2 / 100);

  const handleReset = () => {
    setInputBill("");
    setPercentage1(0);
    setPercentage2(0);
  };
  return (
    <div>
      <BilInput inputBill={inputBill} setInputBill={setInputBill}></BilInput>
      <SelectPercentage percentage={percentage1} setPercentage={setPercentage1}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage percentage={percentage2} setPercentage={setPercentage2}>
        How did your friend like the service?
      </SelectPercentage>
      {inputBill && (
        <>
          <OutputBill inputBill={inputBill} tip={tip}></OutputBill>
          <ResetButton handleReset={handleReset}></ResetButton>
        </>
      )}
    </div>
  );
};

export default TipCalculator;
