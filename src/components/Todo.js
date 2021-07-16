import React from 'react';

function Todo({ todo }) {
    return (
      <div className="todo">
        {todo.text}
      </div>
    );
  };

  export default Todo;