import React from 'react';

function FilterButton(props) {
    return (
        
      <div
        type="button"
        aria-pressed={props.isPressed}
        onClick={() => props.setFilter(props.name)}
        className="filter-button"
      > 
        <div className='items-menu-center'>{props.name}</div>
        
      </div>

    );
  }

  export default FilterButton