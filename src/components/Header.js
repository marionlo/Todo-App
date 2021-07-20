import React from 'react';
import TodoInput from './TodoInput';

function Header({addTodo}) {
    return (
        <div>
        <header>
        <div className="nav">
          <h1 className="logo">TODO</h1>
          <button className="site-mode">
            <img src="./img/icon-sun.svg" alt=""/>
            <img src="./img/icon-moon.svg" className="hidden" alt=""/>
          </button>
        </div>
        
        <div className="add-todo">
          <div className="todo-circle">
          </div>
          
          <TodoInput addTodo={addTodo} />
      
        </div>
      </header>
        </div>
        
    );
  };

  export default Header;



