import React from 'react';

function Todo({ todo }) {
   
    return (
      <li class="todo-item">
      <button class="todo-circle button-check">
      </button>
        <div class="todo-input">{todo.text}</div>
        <button class="btn-delete">
          <img src="img/icon-cross.svg" alt=""/>
        </button>
    </li>
    );
  };

  export default Todo;
