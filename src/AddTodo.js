import React, { Component } from "react";

class AddTodo extends React.Component {
  // レガシー
  // onChange(e) {
  //   const key_value = {
  //     value: e.target.value
  //   };
  //   this.props.onChange(key_value);
  // }

  onChange(e) {
    const { onChange } = this.props;
    onChange({
      value: e.target.value
    });
  }

  // レガシー
  // add() {
  //   if (this.props.value) {
  //     const todoElement = {
  //       content: this.props.value,
  //       id: this.props.todoList.length + 1
  //     };
  //     this.props.add(todoElement);
  //   }
  // }

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

  // レガシー
  // render() {
  //   return (
  //     <div>
  //       <input
  //         type="text"
  //         value={this.props.value}
  //         onChange={this.onChange.bind(this)}
  //       />
  //       <button onClick={this.add.bind(this)}>追加</button>
  //     </div>
  //   );
  // }

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
