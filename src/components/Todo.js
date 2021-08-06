import React from 'react';
import cross from '../img/icon-cross.svg'

function Todo({ todo, index, handleRemoveItem, updateCheckTodo, id }) {

  
    return (
      <li className="todo-item">
      <button className={todo.isCompleted ? 'todo-circle button-check-completed' : 'todo-circle button-check'} onClick={() => {updateCheckTodo(id);}}>
      </button>
        <div className={todo.isCompleted ? 'todo-input todo-input-completed' : 'todo-input'}>{todo.text}</div>
        <button className="btn-delete" >
          <img src={cross} alt="" onClick={() => handleRemoveItem(index)}/>
        </button>
    </li>
    );
  };

  export default Todo;
