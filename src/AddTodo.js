import React, { Component } from "react";

class AddTodo extends Component {
  onChange(e) {
    const { onChange } = this.props;
    onChange({
      value: e.target.value
    });
  }

  add() {
    const { value, todoList, add } = this.props;
    if (value) {
      const todoElement = {
        content: value,
        id: todoList.length + 1
      };
      add(todoElement);
    }
  }

  render() {
    const { value } = this.props;
    return (
      <div>
        <input type="text" value={value} onChange={e => this.onChange(e)} />
        <button onClick={() => this.add()}>追加</button>
      </div>
    );
  }
}

export default AddTodo;
