import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';

import {toggleTodo} from '../../AddTodo/actions'

// todos 本身是一个参数，需要将其变成有效的 Arrays 则需要用 {}
// 将其转换一遍变成 Arrays

const TodoList = ({ todos,onToggleTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map(item => (
        <TodoItem
          key={item.id}
          completed={item.completed}
          text={item.text}
          onToggle={() => onToggleTodo(item.id)}
        />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,

};

const mapStateToProps = state => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = dispatch =>{
  return{
    onToggleTodo: id=>{
      dispatch(toggleTodo(id));
    }
  }
}

//因为这个模块没有状态，所以需要将 Store 中的 State 传递给TodoList

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);

// export default TodoList
