import React from 'react';


function Footer({todos}) {
    
    const todosNumber = todos.length
    return (
    <div>
        <div className="items-menu">
            <div className="items-left" id="items-left"> {todosNumber} items left</div>
            <div className="items-sort">
            <div className="items-all">All</div>
            <div className="items-active">Active</div>
            <div className="items-completed">Completed</div>
        </div>
            <div className="items-clear">Clear Completed</div>
    </div>
        <section className="items-reorder">
            <div>Drag and drop to reorder list</div>
        </section>
    </div>

        
    );
  };

  export default Footer;



