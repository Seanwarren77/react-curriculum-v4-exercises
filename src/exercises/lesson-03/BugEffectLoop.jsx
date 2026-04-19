//src/exercises/lesson-03/BugEffectLoop.jsx

/* 
  BUG #1 — Effect Issue 

  This component uses useState and useEffect to update a value.
  The effect is running on every render, which causes the
  component to behave incorrectly.
  */

import { useEffect, useState } from 'react';

export default function BugEffectLoop() {
  // State variable that stores the current count value
  const [count, setCount] = useState(0);

  /*
    useEffect runs after the component renders.
    The empty dependency array ([]) ensures it only runs once 
    when the component first mounts.

    setTimeout is used to delay the state update slightly.
    avoiding synchronous update warnings in React StrictMode.
    */
  useEffect(() => {
    setTimeout(() => {
      // Update state using functional update to ensure correct value
      setCount((prevCount) => prevCount + 1);
    }, 0);
  }, []);

  // Display the current count value in the UI
  return <p>Bug 1 Count: {count}</p>;
}

// Explanation:
// The useEffect originally caused a warning because it updated state immediately.
// which can trigger cascading render.
// Wrapping the state update in setTimeout prevents the synchronous update issue
// and ensures the effect runs only once when the component mounts.
