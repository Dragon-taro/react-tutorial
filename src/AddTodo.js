import React, { Component } from 'react';

class AddTodo extends React.Component {
  onChange(e) {
    const key_value = {
      value: e.target.value,
    }
    this.props.onChange(key_value)
  }

  add() {
    if (this.props.value) {
      const todoElement = {
        content: this.props.value,
        id: this.props.todoList.length + 1,
      }
      this.props.add(todoElement)
    }
  }

  render() {
    return(
      <div>
        <input
          type="text"
          value={this.props.value}
          onChange={this.onChange.bind(this)}
        />
        <button onClick={this.add.bind(this)}>追加</button>
      </div>
    )
  }
}

export default AddTodo;
