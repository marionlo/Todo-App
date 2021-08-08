import React from 'react';
import TodoInput from './TodoInput';
import sun from '../img/icon-sun.svg'
import moon from '../img/icon-moon.svg'

function Header({addTodo, setDarkTheme, darkTheme}) {
    return (
        <div>
        <header>
        <div className="nav">
          <h1 className="logo">TODO</h1>
          <button className="site-mode" onClick={() => setDarkTheme(prevTheme => !prevTheme)}>
            <img alt="Toggle theme" src={darkTheme ? sun : moon}/>
          </button>
        </div>
        
        <div className={darkTheme ? "add-todo add-todo-dark" : "add-todo"}>
          <div className={darkTheme ? "todo-circle todo-circle-dark" : "todo-circle todo-circle-light"}>
          </div>
          
          <TodoInput addTodo={addTodo} darkTheme={darkTheme} />
      
        </div>
      </header>
        </div>
        
    );
  };

  export default Header;



