import React from 'react';
import Todo from './Todo';
import TodoInput from './TodoInput';
import './App.css';

function App() {
  
  const [todos, setTodos] = React.useState([
    { text: "Jog around the park 3x",
      isCompleted: false 
    },
    { text: "10 minutes meditation",
      isCompleted: false 
    },
    { text: "Read for one hour",
      isCompleted: false 
    },
    { text: "Pick up groceries",
      isCompleted: false 
    },
    { text: "Complete Todo App on Frontend Mentor",
      isCompleted: false 
    },
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
