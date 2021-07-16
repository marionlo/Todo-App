import React from 'react';
import Todo from './Todo';
import './App.css';

function App() {
  
  const [todos, setTodos] = React.useState([
    { text: "Jog around the park 3x" },
    { text: "10 minutes meditation" },
    { text: "Read for one hour" },
    { text: "Pick up groceries" },
    { text: "Complete Todo App on Frontend Mentor" }
  ]);

  return (
    <div>App</div>
  );
}

export default App;
