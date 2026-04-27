// TOPIC: StrictMode Effects and Cleanup
// TASK: Notice how the count increments incorrectly based on the `setInterval` logic. Fix the useEffect so that the counter increments correctly.

import { useEffect, useState } from 'react';

function BugStrictMode() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Start interval
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <h2>Count: {count}</h2>;
}

export default BugStrictMode;

// Write your explanation of how StrictMode helps us catch this bug
// Fix: StrictMode Double Effect Issue
// In React StrictMode (development only), useEffect runs twice on mount.
// This caused multiple intervals to be created, making the counter increment by 2.

// Solution:
// Store the interval in a variaable
// Use a cleanup function to clear the interval
// This ensures only one interva runs at a time.
