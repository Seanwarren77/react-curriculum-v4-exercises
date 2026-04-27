function Child({ onIncrement }) {
  return <button onClick={onIncrement}>Increment Counter</button>;
}

export default Child;

/*
Fix: Parent Manages State

The counter state is stored in the Parent component.

A helper function (incrementCounter) updates the state.

This function is passed to the Child as a prop.
*/
