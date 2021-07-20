import React from 'react';
import TodoInput from './TodoInput';
import sun from '../img/icon-sun.svg'
import moon from '../img/icon-moon.svg'

function Header({addTodo}) {
    return (
        <div>
        <header>
        <div className="nav">
          <h1 className="logo">TODO</h1>
          <button className="site-mode">
            <img src={sun} alt=""/>
            <img src={moon} className="hidden" alt=""/>
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



