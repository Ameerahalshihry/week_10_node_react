import React, { Component } from 'react'
import axios from 'axios'

import Header from './components/Header'
import Form from './components/Form'
import TodoList from './components/TodoList';

class App extends Component {
  state = {
    todos : [],
    name : '',
    description : '',
    isEdit : false
  }

  updateHandler = (e) => {
    alert('updated')
  }

  editHandler = (e) => {
    let temp = {...this.state}
    temp.isEdit = true
    this.setState(temp)
    alert('updated')
  }

  deleteHandler = (e) => {
    let id = e.target.id // get id of todo
    
    axios.delete(`/todos/${id}`)
    .then(response => {
      //copy state
      let temp = {...this.state}
      // find index in the state
      let index = temp.todos.findIndex(element => element._id === id)
      //remove from state
      temp.todos.splice(index, 1)
      //set state
      this.setState(temp)


    })
    .catch(err => console.log(err))
  }
  
  submitHandler = () =>{

    axios.post("/todos", { name : this.state.name, description : this.state.description})
    .then(response => {
      console.log(response)
      let temp = {...this.state}
      temp.todos.push(response.data.todo)
      temp.name = ''
      temp.description = ''
      this.setState(temp)
    })
    .catch(err => console.log(err))
  }

  changeHandler = (e) => {
    let temp = {...this.state}
    temp[e.target.name] = e.target.value

    this.setState(temp)

  }

  getTodo = () => {
    
    axios.get("/todos") 
    .then(data => {
      console.log("from my api", data.data)
      let temp = {...this.state} // copy
      temp.todos = data.data.todos // set to api response
      this.setState(temp) //set the state
    })
    .catch(err => console.log(err))
  }

  componentDidMount(){
    this.getTodo() // load axios data on component mount
  }

  render() {
    console.log("current state after render",this.state)

    return (
      <div>
        <Header/>
        <div className="container">
          <div className="row">
            <div className="col-6">
            <div className="list-group">
                <TodoList 
                  todos={this.state.todos}
                  delete={this.deleteHandler}
                  update={this.updateHandler}
                   />
              </div>
            </div>
            <div className="col-6">
              <Form 
                todo = { 
                  {name:this.state.name, description: this.state.description} 
                }
                change={this.changeHandler}
                submit={this.submitHandler}
                delete={this.deleteHandler}
                />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App