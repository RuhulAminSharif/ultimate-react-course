import { useState } from "react";

const Counter = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <>
      <div>
        <div>
          <button onClick={() => setStep((currStep) => currStep - 1)}>-</button>
          <span>Step {step}</span>
          <button onClick={() => setStep((currStep) => currStep + 1)}>+</button>
        </div>

        <div>
          <button onClick={() => setCount((currCount) => currCount - step)}>
            -
          </button>
          <span>Count {count}</span>
          <button onClick={() => setCount((currCount) => currCount + step)}>
            +
          </button>
        </div>
        <div>
          <p>
            <span>
              {count === 0
                ? "Today is "
                : count > 0
                ? `${count} days from today is `
                : `${Math.abs(count)} days ago was `}
            </span>
            <span>{date.toDateString()}</span>
          </p>
        </div>
      </div>
    </>
  );
};
export default Counter;
