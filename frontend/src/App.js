import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {
  state = {
    todos : []
  }

  deleteHandler = (e) => {
    console.log(e.target.id)
    
    axios.delete(`/todos/${e.target.id}`)
    .then(response => console.log(response))
    .catch(err => console.log(err))
  }
  
  submitHandler = () =>{

    axios.post("/todos", { name : this.state.name, description : this.state.description})
    .then(response => {
      console.log(response)
      let temp = {...this.state}
      temp.todos.push({name: this.state.name, description: this.state.description})

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
    this.getTodo() // load on component mount
  }

  render() {
    console.log("current state after render",this.state)

    let todos = this.state.todos.map((todo) =>{ 
     return <li key={todo._id}> {todo.name}<button id={todo._id} onClick={this.deleteHandler}>delete</button> </li>
    })
    return (
      <div>
        {todos}
        <div>
          <div>
          <input name="name" placeholder="todo name" onChange={this.changeHandler}/>
          </div>
          <div>
          <textarea name="description" onChange={this.changeHandler}></textarea>
          </div>
          <button onClick={this.submitHandler}> Create</button>
        </div>
      </div>
    )
  }
}

export default App