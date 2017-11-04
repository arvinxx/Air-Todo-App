import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions';
const addPrompts = 'Something to type in ...';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    // 如果不 bind this 的话，就会报以下的错
    // Uncaught TypeError: Cannot read property 'setState' of undefined
    // this.onSubmit = this.onSubmit.bind(this);

    this.onInputChange = this.onInputChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.onInputFocus = this.onInputFocus.bind(this);
    this.onInputBlur = this.onInputBlur.bind(this);

    this.state = {
      value: '',
      comment: addPrompts
    };
  }
  // onSubmit(e) {
  //   e.preventDefault();
  //   const inputValue = this.state.value;
  //
  //   if (!inputValue.trim()) {
  //     return;
  //   }
  //
  //   // 理解版本 v1
  //   // 用 import dispatch 函数可以模拟出 connect 后的效果
  //   // 换句话说，没有 Store 和 reducer 并不是报错的关键
  //
  //   // dispatch(addTodo(inputValue));
  //   this.props.onAdd(inputValue);
  //   this.setState({ value: '' });
  // }

  handleKeyUp(e) {
    if (e.keyCode === 13) {
      const inputValue = this.state.value;
      if (!inputValue.trim()) {
        return;
      }
      this.props.onAdd(inputValue);
      this.setState({ value: '' });
    }
  }

  onInputChange(e) {
    this.setState({
      value: e.target.value
    });
  }
  // 鼠标点击Input时隐藏 Placeholder
  onInputFocus() {
    this.setState({
      comment: ''
    });
  }
  onInputBlur() {
    this.setState({
      comment: addPrompts
    });
  }

  render() {
    return (
      <div>
        <input
          className="new-todo"
          onChange={this.onInputChange}
          value={this.state.value}
          placeholder={this.state.comment}
          onKeyUp={this.handleKeyUp}
          onFocus={this.onInputFocus}
          onBlur={this.onInputBlur}
        />
      </div>
    );
  }
}

//限制导入的 onAdd 参数必须为函数
AddTodo.propTypes = {
  onAdd: PropTypes.func.isRequired
};

//如果没有这个函数，onSubmit 函数将无法识别 onAdd 函数
//更不会调用 addTodo 这个Action Creater
const mapDispatchToProps = dispatch => {
  return {
    onAdd: text => {
      dispatch(addTodo(text));
    }
  };
};

// 理解版本 v1
// 不用 connect 的话就无法将 mapDispatchToProps 这个函数
// 与 AddTodo 绑定起来，就无法识别 onAdd 是什么函数
// 但 connect 必须要与创建好的 Store 和 reducer 绑定在一块，不然会报以下错误
// TypeError: (0 , _reactRedux2.default) is not a function

// 理解版本 v2
// 创建好了 Store 和 reducer 前一个报错就没有了，但是报错内容为
// Uncaught TypeError: this.props.onAdd is not a function
//
// 所以接下来需要将 TodoList 这个组件完成，因为 onAdd 属性应该是
// 加载创建到 TodoList 中去的。

export default connect(null, mapDispatchToProps)(AddTodo);
// export default AddTodo;
