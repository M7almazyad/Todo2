import React, {Component, useState} from 'react';
import Todos from './Todos'
import AddTodo from "./AddTodo";
import './App.css'


class App extends Component{

  state ={
    todos :[
      {id:1 , content:"buy some milk"},
      {id:2 , content:"play game"},
      {id:3 , content:"buy some milk"},
      {id:4 , content:"play game"},
      {id:5 , content:"buy some milk"},
      {id:6 , content:"play game"}
    ],
    counter:0,
    current:''
  }

  deleteTodo=(id)=>{
    const todos= this.state.todos.filter( todo=>{
      return todo.id !==id
    });
    this.setState({
      todos:todos,
    })
  }
  doneTodo=(id)=>{
    let totalCounter=this.state.counter+1;
    const todos= this.state.todos.filter( todo=>{
      return todo.id !==id
    });
    this.setState({
      todos:todos,
      counter:totalCounter
    })
    console.log(this.state.counter)
  }
  addTodo=(todo)=>{
    var patt = new RegExp("[A-z]");
    var res = patt.test(todo.content);
    if(res){
      todo.id=Math.random();
      let todos=[...this.state.todos,todo];
      this.setState({
        todos:todos,
      })
      }
  }

  editTodo=(id,todoEdit)=>{
    const todos=this.state.todos;
    const todosList=todos.map(todo=>{
      return id===todo.id?todoEdit:todo
    })
    this.setState({
      todos: todosList
    })
  }


  render() {
    const todosL=this.state.todos;
    const todosList=todosL.map(todo=>{
      return  <Todos todo={todo} deleteTodo={this.deleteTodo}
                     editTodo={this.editTodo} doneTodo={this.doneTodo}/>
    })
    return (
        <div>

          <div className="container-fluid">
            <div className='app-wrapper '>
              <div className="row ">
                <h1 className="col-10 mb-4">React ToDo</h1>
                <h1 className="counter">{this.state.counter}</h1>
              </div>
                <AddTodo addTodo={this.addTodo} currentTodo={this.currentTodo} />
              {todosList}
            </div>

          </div>

        </div>
            );
  }

}

export default App;
// <h1 className=" blue-text center">Todo's</h1>
// <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
// <AddTodo addTodo={this.addTodo} />