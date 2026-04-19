// TOPIC: Choose the correct tool: useRef vs useState
// TASK: Make sure it updates the text *without* triggering a re-render
import { useState } from 'react';

function FindCorrectHook() {
  const [clickCount, setClickCount] = useState(0);

  function handleClick() {
    setClickCount((prev) => prev + 1);
  }

  return <button onClick={handleClick}>Clicks: {clickCount}</button>;
}

export default FindCorrectHook;

/*
Fix: useRef vs useState

The original implementation likely used useRef, which does not trigger re-renders.
Since we want the UI to update when the count chages,
we must use useStte instead.

useState causes React to re-render the component when the value updates.
*/
