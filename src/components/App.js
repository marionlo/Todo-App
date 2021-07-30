import React from 'react';
import Todo from './Todo';
import Header from './Header';
import Footer from './Footer';
import './App.css';

function App() {
  
  const [todos, setTodos] = React.useState([
    { text: "Jog around the park 3x",
      isCompleted: false, 
    },
    { text: "10 minutes meditation",
      isCompleted: false, 
    },
    { text: "Read for one hour",
      isCompleted: false,
    },
    { text: "Pick up groceries",
      isCompleted: false,
    },
    { text: "Complete Todo App on Frontend Mentor",
      isCompleted: false, 
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
    console.log(todos)
  }

  const handleCompleted = index => {
    const newTodos = [...todos];
    if(newTodos[index].isCompleted === false) {
      newTodos[index].isCompleted = true
    } else {
      newTodos[index].isCompleted = false
    }
    setTodos(newTodos);
    console.log(newTodos.filter(Boolean).length)
    
  };

  const isCompletedCount = () => {
    const completedCount = todos.filter(function(s) { return s.isCompleted; }).length;
     return completedCount
  }

  return (
    <div className="main">
      <Header addTodo={addTodo}/>
      <ul className="todo-list"  id="todo-list">
        {todos.map((todo, index) => (
          <Todo
            handleRemoveItem={handleRemoveItem}
            todos={todos}
            setTodos={setTodos}
            key={index}
            index={index}
            todo={todo}
            handleCompleted={handleCompleted}
          />
        ))}
      </ul>
      <Footer todos={todos} isCompletedCount={isCompletedCount}/>
    </div>
  );
  
}

export default App;
