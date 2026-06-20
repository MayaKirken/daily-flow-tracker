import React, { useState } from 'react';

const INITIAL_HABITS = [
  { id: 1, name: "Morning neighborhood walk", category: "Body", completed: false },
  { id: 2, name: "Drink Lady Grey tea", category: "Mind", completed: true },
  { id: 3, name: "React coding practice", category: "Craft", completed: false }
];

function App() {
  const [habits, setHabits] = useState(INITIAL_HABITS);
  const toggleHabit = (id = 0) => {
    setHabits((prevHabits) => {
      return prevHabits.map((habit) => {
        if (habit.id === id) {
          return { ...habit, completed: !habit.completed };
        }
        return habit;
      });
    })
  }
  const completedCount = habits.filter(habit => habit.completed).length;
  const successPercentage = habits.length > 0 ? Math.round((completedCount / habits.length) * 100) : 0;
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Daily Flow Tracker</h1>
        <p>My intentional space for daily rituals.</p>
      </header>

      <div className="progress-container">
        <div className="progress-bar-track">
          <div className="progress-bar-fill" style={{ width: `${successPercentage}%` }}>
          </div>
        </div>
        <span className="progress-text">{successPercentage}% Complete</span>
      </div>
      <main className="dashboard">
        <p>Tracking {habits.length} habits successfully.</p>

        <div className="habit-grid">
          {habits.map((habit) => {
            return (
              <div key={habit.id} className="habit-card" onClick={() => toggleHabit(habit.id)}>
                <span className="habit-category">{habit.category}</span>
                <h3>{habit.name}</h3>
                <p>{habit.completed ? "✅Done" : "⏳In Progress"}</p>
              </div>
            );
          })}
        </div>
      </main>
 
      
    </div>
  );
}

export default App;