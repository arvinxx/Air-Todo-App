import React, { PropTypes } from 'react';

const TodoItem = ({ text, onToggle, completed, onRemove }) => {
  const checkedProp = completed ? { checked: true } : {};
  return (
    <div className='todo-item-div'>
      <input
        className="toggle"
        type="radio"
        {...checkedProp}
        readOnly
        onClick={onToggle}
      />
      <li
        className={ completed? 'crossed todo-item' : 'todo-item'}
        // style={{
        //   textDecoration: completed ? 'line-through' : 'none'
        // }}
        onClick={onToggle}
      >
        <label className="text">{text}</label>
      </li>
      <img
        className="remove"
        alt=""
        src={'./assets/trash.svg'}
        onClick={onRemove}
      />
    </div>
  );
};
TodoItem.propTypes = {
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};
export default TodoItem;
