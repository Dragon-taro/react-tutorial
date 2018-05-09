import React, { Component } from 'react';

class TodoElement extends React.Component {
  onDelete() {
    this.props.onDelete(this.props.element.id)
  }
  render() {
    return(
      <li>
        <span>{this.props.element.content}</span>
        <button onClick={this.onDelete.bind(this)}>削除</button>
      </li>
    )
  }
}

export default TodoElement
