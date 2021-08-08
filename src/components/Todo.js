import React from 'react';
import cross from '../img/icon-cross.svg'
import check from '../img/icon-check.svg'

function Todo({ todo, index, handleRemoveItem, updateTodo, id, darkTheme }) {

 const todoStatus = () => {
    if(todo.isCompleted && !darkTheme) {
      return(
        <div className="todo-input todo-input-completed todo-input-completed-light">{todo.text}</div>
      )
    } else if (todo.isCompleted && darkTheme) {
      return (
        <div className="todo-input todo-input-completed todo-input-completed-dark">{todo.text}</div>
      )
    } else {
      return <div className="todo-input">{todo.text}</div>
    };
  } 

  const todoStatusButton = () => {
    if(todo.isCompleted && !darkTheme) {
      return(
        <button className="todo-circle button-check-completed" onClick={() => {updateTodo(id);}}><img src={check} alt="Todo completed"/></button>
      )
    } else if (!todo.isCompleted && !darkTheme) {
      return (
        <button className="todo-circle button-check todo-circle-light" onClick={() => {updateTodo(id);}}></button>
      )
    }    
    else if (!todo.isCompleted && darkTheme) {
      return (
        <button className="todo-circle button-check todo-circle-dark" onClick={() => {updateTodo(id);}}></button>
      )
    } else if (todo.isCompleted && darkTheme) {
      return (
        <button className="todo-circle button-check-completed" onClick={() => {updateTodo(id);}}><img src={check} alt="Todo completed"/></button>
      )
    } else {
      return (
        <button className='todo-circle button-check' onClick={() => {updateTodo(id);}}></button>
      )    
    };
  }

  
    return (
      <li className={darkTheme ? 'todo-item todo-item-dark' : 'todo-item todo-item-light'}>
      {todoStatusButton()}
      {todoStatus()}
        <button className="btn-delete" >
          <img src={cross} alt="" onClick={() => handleRemoveItem(index)}/>
        </button>
    </li>
    );
  };

  export default Todo;

  

  