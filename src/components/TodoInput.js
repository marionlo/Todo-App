import React from 'react';

function TodoInput({ addTodo, darkTheme }) {
    const [value, setValue] = React.useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };
  
    return (
      <form onSubmit={handleSubmit} id="submit-form" >
        <input
          type="text"
          className={darkTheme ? 'todo-input todo-input-dark' : 'todo-input todo-input-light'} id="new-todo" placeholder="Create a new todo..." minLength="1" maxLength="300"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </form>
    );
  }

  export default TodoInput;