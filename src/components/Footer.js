import React from 'react';


function Footer({todos, isCompletedCount, handleRemoveCompleted, filterList }) {
    
    
    const todosNumber = todos.length;
    const completedNumber = isCompletedCount();
    const newNumber = todosNumber - completedNumber;


    return (
    <div>
        <div className="items-menu">
            <div className="items-left" id="items-left"> {newNumber} items left</div>
            <div className="items-sort">
            {filterList}
        </div>
            <div className="items-clear" onClick={() => handleRemoveCompleted()}>Clear Completed</div>
    </div>
        <section className="items-reorder">
            <div>Drag and drop to reorder list</div>
        </section>
    </div>

        
    );
  };

  export default Footer;



