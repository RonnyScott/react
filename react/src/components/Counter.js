import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Counter</h2>
      <p className="text-3xl mb-4">{count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600"
      >
        Increment
      </button>
      <button
        onClick={() => setCount(count - 1)}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;