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
  const [darkTheme, setDarkTheme] = React.useState(getDefaultTheme())

  const [todos, setTodos] = React.useState([
    { text: "Complete online Javascript Course",
      isCompleted: true, 
      id: 1
    },
    { text: "Jog around the park 3x",
      isCompleted: true, 
      id: 2
    },
    { text: "10 minutes meditation",
      isCompleted: false, 
      id: 3
    },
    { text: "Read for 1 hour",
      isCompleted: false,
      id: 4
    },
    { text: "Pick up groceries",
      isCompleted: false,
      id: 5
    },
    { text: "Complete Todo App on Frontend Mentor",
      isCompleted: false, 
      id: 6
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


  const notCompletedCount = () => {
    const completedCount = todos.filter(function(s) { return !s.isCompleted; }).length;
    return completedCount
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

  // Local Storage - store todos
  useEffect(()=>{
    const data = localStorage.getItem('data')
    
    if(data){
      setTodos(JSON.parse(data))
     }
    
    },[])  
    useEffect(()=>{ 
      localStorage.setItem('data',JSON.stringify(todos)) 
    })

  // Local Storage - Theme mode
    useEffect(() => {
      localStorage.setItem('dark', JSON.stringify(darkTheme))
    }, [darkTheme])
    
    function getDefaultTheme() {
      const selectedTheme = JSON.parse(localStorage.getItem('dark'))
      return selectedTheme || false
    }

  return (
    <div className={darkTheme ? 'theme dark-theme' : 'theme light-theme'}>
    <div className="main">
      <Header addTodo={addTodo} setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
      <div>
      <ul className={darkTheme ? 'todo-list todo-list-dark' : 'todo-list todo-list-light'}  id="todo-list">
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
            setDarkTheme={setDarkTheme} 
            darkTheme={darkTheme}

          />
        ))}
      </ul>
      <Footer todos={todos} notCompletedCount={notCompletedCount} handleRemoveCompleted={handleRemoveCompleted} filterList={filterList} darkTheme={darkTheme} />
      </div>
    </div>
    </div>
  );
  
}

export default App;
