import React from 'react';

function handleClick(name) {
  return () => {
    console.log(`${name} clicked`);
  };
}

function App() {
  return (
    <div>
      <h1>React Events</h1>
      <button onClick={handleClick('Play')}>
        Play
      </button>
      <button onClick={handleClick('Reset')}>
        Reset
      </button>
    </div>
  )
}

export default App;
