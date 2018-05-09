import React, { Component } from 'react';
import TodoElement from './TodoElement'
import AddTodo from './AddTodo'

class App extends Component {
  constructor() {
    super()
    this.state={
      count: 0,
      todoList: [],
      value: "",
    }
  }

  onChange(key_value) {
    this.setState(key_value)
  }

  add(todoElement) {
    this.setState({
      todoList: this.state.todoList.concat(todoElement),
      value: "",
    })
  }

  handleDelete(id) {
    let todoList = this.state.todoList.concat()
    let index = 0
    todoList.map((element, idx) => {
      if (element.id == id) {
        index = idx
      }
    })
    todoList.splice(index, 1)
    this.setState({todoList: todoList})
  }

  render() {
    const todoListNode = this.state.todoList.map(element => {
      return (
        <TodoElement
          key={element.id}
          element={element}
          onDelete={this.handleDelete.bind(this)}
          {...this.state}
        />
      )
    })
    return (
      <div>
        <h1>TODO App</h1>
        <AddTodo
          {...this.state}
          onChange={this.onChange.bind(this)}
          add={this.add.bind(this)}
        />
        <ul>
          {todoListNode}
        </ul>
      </div>
    );
  }
}

export default App;
