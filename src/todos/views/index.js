import React from 'react';

import TodoList from './TodoList';

import './style.css';

export default () => {
  return (
    <div className="todo">
      <h1>AIR TODO</h1>
      <TodoList />
    </div>
  );
};
