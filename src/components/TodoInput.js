import React from 'react';

function TodoInput({ addTodo }) {
    const [value, setValue] = React.useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };
  
    return (
      <form onSubmit={handleSubmit} id="submit-form">
        <input
          type="text"
          className="todo-input" id="new-todo" placeholder="Create a new todo..." minlength="1" maxlength="300"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </form>
    );
  }

  export default TodoInput;