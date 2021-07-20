import React from 'react';
import cross from '../img/icon-cross.svg'

function Todo({ todo }) {
   
    return (
      <li class="todo-item">
      <button class="todo-circle button-check">
      </button>
        <div class="todo-input">{todo.text}</div>
        <button class="btn-delete">
          <img src={cross} alt=""/>
        </button>
    </li>
    );
  };

  export default Todo;
