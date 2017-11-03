import React from 'react';

import { view as Todo } from './todos';
import { view as AddTodo } from './AddTodo';
import { view as Filter } from './filter';

import './style.css';

function TodoApp() {

  return (
    <div className="todoApp">
      <Todo />
      <Filter />
      <AddTodo />
    </div>
  );
}

export default TodoApp;
