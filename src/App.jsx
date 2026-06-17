import React, { useState } from 'react';

const INITIAL_HABITS = [
  { id: 1, name: "Morning neighborhood walk", category: "Body", completed: false },
  { id: 2, name: "Drink Lady Grey tea", category: "Mind", completed: true },
  { id: 3, name: "React coding practice", category: "Craft", completed: false }
];

function App() {
  const [habits, setHabits] = useState(INITIAL_HABITS);
  return (
    <div className="app-container">
      <h1>Daily Flow Tracker</h1>
      <p>My intentional space for daily rituals.</p>
      <p>Tracking {habits.length} habits successfully.</p>
    </div>
  );
}

export default App;