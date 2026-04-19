// src/exercises/lesson-03/BugProps.jsx

/*
  BUG #3 — Props Not Updating

  This component displays a message based on a prop and includes
  a button that should change that message.

  Right now, the message is being stored in a way that React does not track,
  so the UI does not update when the value changes.

  Use the commented "Explanation" section at the bottom of this lesson's components.
*/

import { useState } from 'react';

function BugProps(props) {
  // State initialized from props.message so React can track changes
  const [message, setMessage] = useState(props.message);

  /* This function updates the message state when the button is clicked.
Because we are using useState, React will re-render the component
and update the UI automatically.
*/
  function changeMessage() {
    setMessage('New message');
  }

  return (
    <div>
      {/* Displays the current message from state */}
      <p>{message}</p>

      {/* Button triggers a state update to change the message */}
      <button onClick={changeMessage}>Change Message</button>
    </div>
  );
}

export default BugProps;

// Explanation:
// The message was stored in a regular variable, which React does not track.
// Due to this, updating the value did not cause the component to re-render.
// By using useState, React can track the message and update the UI when it changes.
