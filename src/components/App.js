import React from 'react';
import Todo from './Todo';
import TodoInput from './TodoInput';
import './App.css';

function App() {
  
  const [todos, setTodos] = React.useState([
    { text: "Jog around the park 3x" },
    { text: "10 minutes meditation" },
    { text: "Read for one hour" },
    { text: "Pick up groceries" },
    { text: "Complete Todo App on Frontend Mentor" }
  ]);
  
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
          />
        ))}
      </div>
      <TodoInput addTodo={addTodo} />
    </div>
  );
}

export default App;
