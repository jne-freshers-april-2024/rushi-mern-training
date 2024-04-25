import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useCallback } from "react";

const Counter = () => {
  const [count, setCounter] = useState(0);

  const increment = useCallback(() => {
    setCounter((prevCount) => prevCount + 1);
  }, []); // No dependency because it doesn't rely on external values

  const decrement = useCallback(() => {
    setCounter((prevCount) => Math.max(0, prevCount - 1));
  }, []); // Memoized function, retains same identity

  return (
    <>
      <h1 className="badge text-bg-secondary m-3 p-3">{count}</h1>
      <br></br>
      <button onClick={increment} type="button" className="btn btn-info m-2">
        Increment
      </button>

      <button
        id="decrement"
        onClick={decrement}
        type="button"
        className="btn btn-info"
        disabled={count === 0}
      >
        Decrement
      </button>
    </>
  );
};

export default Counter;
