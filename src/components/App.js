import React from 'react';
import Todo from './Todo';
import Header from './Header';
import Footer from './Footer';
import './App.css';

function App() {
  
  const [todos, setTodos] = React.useState([
    { text: "Jog around the park 3x",
      isCompleted: false,
      id: 0 
    },
    { text: "10 minutes meditation",
      isCompleted: false,
      id: 1  
    },
    { text: "Read for one hour",
      isCompleted: false,
      id: 2 
    },
    { text: "Pick up groceries",
      isCompleted: false,
      id: 3 
    },
    { text: "Complete Todo App on Frontend Mentor",
      isCompleted: false, 
      id: 4
    },
  ]);
  
  const addTodo = (text, isCompleted=false) => {
    const newTodos = [...todos, { text, isCompleted}];
    setTodos(newTodos);
    
  };
  
  const handleRemoveItem = (e) => {
    const {id} = e.target.parentElement;
    todos.splice(id, 1)
    setTodos([...todos])
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
