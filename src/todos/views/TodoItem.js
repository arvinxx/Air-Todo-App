import React, { PropTypes } from 'react';

const TodoItem = ({ text, onToggle, completed, onRemove }) => {
  const checkedProp = completed ? { checked: true } : {};
  console.log(onToggle);
  return (
    <div>
      <input
        id="111"
        className="hidden-toggle"
        type="checkbox"
        {...checkedProp}
        onClick={onToggle}
      />
      <span htmlFor="111"  className="toggle"   onClick={onToggle}/>

      <li
        className="todo-item"
        style={{
          textDecoration: completed ? 'line-through' : 'none'
        }}
        onClick={onToggle}
      >
        <label className="text">
          {text}
        </label>
      </li>
      <img className="remove" src={'./assets/trash.svg'} onClick={onRemove} />
    </div>
  );
};
TodoItem.propTypes = {
  onToggle: PropTypes.func.isRequired,
  // onRemove: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};
export default TodoItem;
