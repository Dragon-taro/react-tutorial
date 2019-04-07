import React, { Component } from "react";
import TodoElement from "./TodoElement";
import AddTodo from "./AddTodo";

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      todoList: [],
      value: ""
    };
  }

  onChange(keyValue) {
    this.setState(keyValue);
  }

  add(todoElement) {
    this.setState({
      todoList: this.state.todoList.concat(todoElement),
      value: ""
    });
  }

  handleDelete(id) {
    // レガシーコード
    // let todoList = this.state.todoList.concat();
    // let index = 0;
    // todoList.map((element, idx) => {
    //   if (element.id == id) {
    //     index = idx;
    //   }
    // });
    // todoList.splice(index, 1);

    const { todoList } = this.state;
    const newTodoList = todoList.filter(element => element.id !== id);
    this.setState({ todoList: newTodoList });
  }

  // レガシー
  // render() {
  //   const todoListNode = this.state.todoList.map(element => {
  //     return (
  //       <TodoElement
  //         key={element.id}
  //         element={element}
  //         onDelete={this.handleDelete.bind(this)}
  //         {...this.state}
  //       />
  //     );
  //   });
  //   return (
  //     <div>
  //       <h1>TODO App</h1>
  //       <AddTodo
  //         {...this.state}
  //         onChange={this.onChange.bind(this)}
  //         add={this.add.bind(this)}
  //       />
  //       <ul>{todoListNode}</ul>
  //     </div>
  //   );
  // }

  render() {
    const { todoList } = this.state;
    return (
      <div>
        <h1>TODO App</h1>
        <AddTodo
          {...this.state}
          onChange={keyValue => this.onChange(keyValue)}
          add={todoElement => this.add(todoElement)}
        />
        <ul>
          {todoList.map(element => (
            <TodoElement
              key={element.id}
              element={element}
              onDelete={id => this.handleDelete(id)}
              {...this.state}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
