import React from 'react';
import Todo from './Todo';
import TodoInput from './TodoInput';
import Header from './Header';
import Footer from './Footer';
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
  
  const addTodo = (text, isCompleted=false) => {
    const newTodos = [...todos, { text, isCompleted }];
    setTodos(newTodos);
    
  };

  const handleRemoveItem = (e) => {
    const text = e.target.getAttribute("name")
    setTodos(todos.filter(todo => todo.text !== text));
  }

  return (
    <div className="main">
      <Header addTodo={addTodo}/>
      <ul className="todo-list"  id="todo-list">
        {todos.map((todo, index) => (
          <Todo
            handleRemoveItem={handleRemoveItem}
            key={index}
            index={index}
            todo={todo}
          />
        ))}
      </ul>
      <Footer todos={todos}/>
    </div>
  );
}

export default App;
