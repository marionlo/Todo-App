import React, { useEffect, useState } from 'react';
import Todo from './Todo';
import Header from './Header';
import Footer from './Footer';
import './App.css';
import FilterButton from './FilterButton';

const FILTER_MAP = {
  All: () => true,
  Active: todos => !todos.isCompleted,
  Completed: todos => todos.isCompleted
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App() {
  const [filter, setFilter] = useState('All');
  
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
  };

  const isCompletedCount = () => {
    const completedCount = todos.filter(function(s) { return s.isCompleted; }).length;
     return completedCount;
  }

  const handleRemoveCompleted = () => {
    setTodos(todos => {
      return todos.filter(function(s) { return !s.isCompleted; });
    });  
    
  }

  // const ShowCompleted = () => {
  //   const numberOfCompletedTodo = todos.filter(function(s) { return s.isCompleted; }).length;

  //   if (numberOfCompletedTodo >= 1) {
  //     setTodos(todos => {
  //       return todos.filter(function(s) { return s.isCompleted; });
  //     });
  //     console.log(todos)
  //   } 
   
  // }

  // const ShowActive = () => {  
  //   const numberOfActiveTodo = todos.filter(function(s) { return !s.isCompleted; }).length;
  //   if (numberOfActiveTodo >= 1) {
  //     setTodos(todos => {
  //       return todos.filter(function(s) { return !s.isCompleted; });   
  //     });
  //     console.log(todos)
  //   } 
  // }


  // const ShowCompleted = () => {
  //   const newTodos = todos.filter((todo) => todo.isCompleted); 
  //   console.log(newTodos)

  // }

  // const ShowActive = () => {  
  //   const newTodos = todos.filter((todo) => !todo.isCompleted); 
  //   console.log(newTodos)

  // }
  
  const filterList = FILTER_NAMES.map(name => (

    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />

  ));


  return (
    <div className="main">
      <Header addTodo={addTodo}/>
      <ul className="todo-list"  id="todo-list">
        {todos.filter(FILTER_MAP[filter]).map((todo, index) => (
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
      <div className="items-sort">
      </div>
      <Footer todos={todos} isCompletedCount={isCompletedCount} handleRemoveCompleted={handleRemoveCompleted} filterList={filterList} />
    </div>
  );
  
}

export default App;
