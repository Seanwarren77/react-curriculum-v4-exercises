// TOPIC: Event Bubbling & Stopping Propagation
// TASK: Ensure only the inner button's action triggers an alert when the button is pushed

function BugEventPropagation() {
  function handleBoxClick() {
    alert("RED BOX CLICKED ❌ Don't show me!");
  }

  function handleButtonClick(event) {
    event.stopPropagation(); // ✅ stops bubbling
    alert('Button Clicked ✅');
  }

  return (
    <div
      onClick={handleBoxClick}
      style={{ border: '2px solid red', padding: '20px' }}
    >
      <button onClick={handleButtonClick}>Click Me</button>
    </div>
  );
}

export default BugEventPropagation;

/*
Fix: Event Bubbling

BY default, events bubble up from child to parent.

Clicking the button triggered both:
- button click handler
- parent div click handler

Solution:
- Use event.stopPropagation() to stop the event from bubbling

Now only the button alert fires.
*/
