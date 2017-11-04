import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';

import { toggleTodo, removeTodo } from '../../AddTodo/actions';

import { FilterTypes } from '../../constants';
// todos 本身是一个参数，需要将其变成有效的 Arrays 则需要用 {}
// 将其转换一遍变成 Arrays

const TodoList = ({ todos, onToggleTodo, onRemoveTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map(item => (
        <TodoItem
          key={item.id}
          completed={item.completed}
          text={item.text}
          onToggle={() => onToggleTodo(item.id)}
          onRemove={() => onRemoveTodo(item.id)}
        />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
};

const filterVisibleTodos = (todos, filter) => {
  switch (filter) {
    case FilterTypes.ALL:
      return todos;
    case FilterTypes.DONE:
      return todos.filter(item => item.completed);
    case FilterTypes.TODO:
      return todos.filter(item => !item.completed);
    default:
      throw new Error('unsupported filter');
  }
};
const mapStateToProps = state => {
  return {
    todos: filterVisibleTodos(state.todos, state.filter)
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onToggleTodo: id => {
      dispatch(toggleTodo(id));
    },
    onRemoveTodo: id => {
      dispatch(removeTodo(id));
    }
  };
};

//因为这个模块没有状态，所以需要将 Store 中的 State 传递给TodoList

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

// export default TodoList
