import React from "react";
import { render } from "react-dom";
//css design
const cls = {
  background: "grey",
  textColor: "green",
  borderRadius: "6px",
  display: "inline-block",
  listStyle: "none",
  margin: "10px 10px 10px 10px"
};
const textprop = {
  padding: "2px 2px 2px 2px",
  display: "block"
};
const btn = {
  float: "right",
  padding: "2px 2px 2px 2px",
  borderRadius: "1px",
  border: "none"
};
const btnadd = {
  textAlign: "center",
  margin: "auto"
};
let id = 0;
const Todo = props => (
  <li style={cls}>
    <input
      type="checkbox"
      checked={props.todo.checked}
      onChange={props.onCheck}
    />
    <span style={textprop}>{props.todo.text}</span>
    <button style={btn} onClick={props.onDelete}>
      Delete
    </button>
  </li>
);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }
  //adding tod
  addTodo() {
    let text = prompt("Entere value");
    this.setState({
      todos: [...this.state.todos, { id: id++, text: text, checked: false }]
    });
  }
  //deleting todo
  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  }
  //checked
  toogleTodo(id) {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id !== id) return todo;
        return {
          id: todo.id,
          text: todo.text,
          checked: !todo.checked
        };
      })
    });
  }

  render() {
    return (
      <div style={btnadd}>
        <span>Added items:{this.state.todos.length}</span>
        <br />
        <span>
          Item done:{this.state.todos.filter(todo => !todo.checked).length}
        </span>
        <ul>
          <button onClick={() => this.addTodo()}>Add Todo</button>
          {this.state.todos.map(todo => (
            <Todo
              onCheck={() => this.toogleTodo(todo.id)}
              onDelete={() => this.removeTodo(todo.id)}
              todo={todo}
            />
          ))}
        </ul>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));

/*
//logic lies here my boy
//id

let id = 0;
//todo fucntion

const Add = props => (
  <li>
    <span>{props.todo.text}</span>
    <input type="checkbox" />
    <button onClick={props.onDelete}>Remove</button>
  </li>
);
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoslst: []
    };
  }
  addTodo() {
    var c = prompt("Enter value");
    this.setState({
      todoslst: [...this.state.todoslst, { text: c, id: id++ }]
    });
  }

  removeTodo(id) {
    this.setState({
      todoslst: this.state.todoslst.filter(todo => todo.id !== id)
    });
  }
  render() {
    return (
      <div>
        <h1>Todo</h1>
        <span>Items Added{this.state.todoslst.length}</span>
        <br />
        <span>uncheck items</span>
        <br />
        <button onClick={() => this.addTodo()}>Add Toodo</button>
        <ul>
          {this.state.todoslst.map(todo => (
            <Add onDelete={() => this.removeTodo(todo.id)} todo={todo} />
          ))}
        </ul>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
*/
