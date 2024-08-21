import { useState } from "react";
import "./App.css";
import "./App.css";

function CounterApp() {
  const [count, setCount] = useState(0);
  // increase count with 1
  const handleIncrease = () => {
    setCount(count + 1);
  };

  // decrease count with 1
  const handleDecrease = () => {
    setCount(count - 1);
  };

  // restore count to zero
  const handleRestoreCount = () => {
    setCount(0);
  };

  return (
    <>
      <h1>Counter</h1>
      <div className="button-container">
        <button type="button" onClick={handleIncrease}>
          Increase
        </button>
        <button type="button" onClick={handleDecrease}>
          Decrease
        </button>
        <button type="button" onClick={handleRestoreCount}>
          Restore
        </button>
        <p>Current Count: {count}</p>
      </div>
    </>
  );
}

export default CounterApp;
