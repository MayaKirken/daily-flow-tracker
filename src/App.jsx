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
      <header className="app-header">
        <h1>Daily Flow Tracker</h1>
        <p>My intentional space for daily rituals.</p>
      </header>

      <main className="dashboard">
        <p>Tracking {habits.length} habits successfully.</p>

        <div className="habit-grid">
          {habits.map((habit) => {
            return (
              <div key={habit.id} className="habit-card">
                <span className="habit-category">{habit.category}</span>
                <h3>{habit.name}</h3>
                <p>{habit.completed ? "✅Done" : "⏳In Progress"}</p>
              </div>
            );
          })};
        </div>
      </main>
 
      
    </div>
  );
}

export default App;