// TOPIC: Correct useRef usage to control DOM elements
// TASK: Implement focusing an input field when the button is clicked.
import { useRef } from 'react';

function FillRefFocus() {
  const inputRef = useRef(null);

  function handleFocus() {
    inputRef.current.focus(); // ✅ focus input
  }

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

export default FillRefFocus;

/*
Fix: Using useRef for DOM Access

useRef allows us to directly reference a DOM element. 

Steps:
- Attach ref to input
- Access it using inputRef.current
- Call .focus() to focus the input

This is an example of imperative DOM manipulation in React. 
*/
