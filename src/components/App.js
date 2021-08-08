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
      isCompleted: true, 
      id: 1
    },
    { text: "10 minutes meditation",
      isCompleted: true, 
      id: 2
    },
    { text: "Read for one hour",
      isCompleted: false,
      id: 3
    },
    { text: "Pick up groceries",
      isCompleted: false,
      id: 4
    },
    { text: "Complete Todo App on Frontend Mentor",
      isCompleted: false, 
      id: 5
    },
  ]);

  const randomId = () => {
    const id = Math.floor(Math.random() * 1000);
    if (todos.length === 0) {
      return 1;
    }
    // check if generated id already exists
    if (todos.some(item => item.id === id)) {
      return randomId();
    }
    return id;
  };

  
  const addTodo = (text, id, isCompleted=false) => {
    id = randomId();
    const newTodos = [...todos, { text, isCompleted, id}];
    setTodos(newTodos);
    console.log(newTodos);
    
  };
  
  const handleRemoveItem = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  const updateTodo = id => {

    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
        return todo;       
      }
      return todo;
    });
    
    setTodos(updatedTodos);
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
  
  const filterList = FILTER_NAMES.map(name => (

    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />

  ));

  // Local Storage
  useEffect(()=>{
    const data = localStorage.getItem('data')
    
    if(data){
      setTodos(JSON.parse(data))
     }
    
    },[])  
    useEffect(()=>{ 
      localStorage.setItem('data',JSON.stringify(todos)) 
    })
    


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
            id={todo.id}
            updateTodo={updateTodo}

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
