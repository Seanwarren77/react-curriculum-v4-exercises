import { useState } from 'react';
import Child from './Child';

function Parent() {
  const [count, setCount] = useState(0);

  function incrementCounter() {
    setCount((prev) => prev + 1);
  }

  return (
    <div>
      <h2>Counter: {count}</h2>
      {/* ✅ Pass function to child */}
      <Child onIncrement={incrementCounter} />
    </div>
  );
}

export default Parent;
