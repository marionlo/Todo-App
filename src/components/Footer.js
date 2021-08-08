import React from 'react';


function Footer({todos, notCompletedCount, handleRemoveCompleted, filterList, darkTheme }) {
    
    return (
    <div>
        <div className={darkTheme ? "items-menu todo-list-dark" : "items-menu todo-list-light"}>
            <div className="items-left" id="items-left"> {notCompletedCount()} items left</div>
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



