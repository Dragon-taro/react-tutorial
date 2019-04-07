import React, { Component } from "react";

class TodoElement extends Component {
  // レガシー
  // onDelete() {
  //   this.props.onDelete(this.props.element.id);
  // }
  // render() {
  //   return (
  //     <li>
  //       <span>{this.props.element.content}</span>
  //       <button onClick={() => this.onDelete()}>削除</button>
  //     </li>
  //   );
  // }

  render() {
    const {
      element: { id },
      onDelete
    } = this.props;

    return (
      <li>
        <span>{this.props.element.content}</span>
        <button onClick={() => onDelete(id)}>削除</button>
      </li>
    );
  }
}

export default TodoElement;
