// src/exercises/lesson-03/BugMutatedState.jsx

/*
  BUG #2 — State Issue

  This component displays a count and updates it when the button is clicked.
  However, the way the count is being changed causes the component to behave
  incorrectly.
*/

import { useState } from 'react';
export default function BugMutatedState() {
  // State variable that stores the current count value
  const [count, setCount] = useState(0);

  /* This function runs when the button is clicked.
  it updates state using the functional update form to ensure
  React always uses the latest state value.
  */
  function handleAdd() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div>
      {/* Displays the current count value */}
      <p>Bug 2 Count: {count}</p>

      {/* Button that triggers the state update when clicked */}
      <button onClick={handleAdd}>Add 1</button>
    </div>
  );
}

// Explanation:
// The original code mutated state directly using count++, which React does not track.
// Because of this, the component may not re-render correctly.
// The fix is to remove the mutation and use setCount to update state properly.
