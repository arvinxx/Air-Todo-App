import React from 'react';

import './style.css';

function view() {
  return (
    <div className="filter">
      <div className="filter-box">
        <div className="filter-item filter-done">DONE</div>
        <div className="filter-item filter-todo">TODO</div>
        <div className="filter-item filter-all">ALL</div>
      </div>
    </div>
  );
}

export default view;
