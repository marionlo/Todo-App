import React from 'react';
import cross from '../img/icon-cross.svg'

function Todo({ todo, index, handleRemoveItem, handleCompleted }) {

  
    return (
      <li className="todo-item">
      <button className="todo-circle button-check" name={todo.isSelected} onClick={() => handleCompleted(index)}>
      </button>
        <div className="todo-input">{todo.text}</div>
        <button className="btn-delete" >
          <img src={cross} alt="" onClick={handleRemoveItem}/>
        </button>
    </li>
    );
  };

  export default Todo;
