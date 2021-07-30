import React from 'react';
import cross from '../img/icon-cross.svg'

function Todo({ todo, index, handleRemoveItem, handleCompleted }) {

  
    return (
      <li className="todo-item">
      <button className={todo.isCompleted ? 'todo-circle button-check-completed' : 'todo-circle button-check'} onClick={() => handleCompleted(index)}>
      </button>
        <div className="todo-input">{todo.text}</div>
        <button className="btn-delete" >
          <img src={cross} alt="" onClick={handleRemoveItem}/>
        </button>
    </li>
    );
  };

  export default Todo;
