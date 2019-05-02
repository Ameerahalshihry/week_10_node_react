import React from 'react'

const TodoList = (props) => {
//   let todos = props.todos.map((todo) =>{ 
//    return <li className="list-group-item list-group-item-action" key={todo._id}>
//   <div className="d-flex w-100 justify-content-between">
//     <h5 className="mb-1 text-capitalize">{todo.name}</h5>
//     <small>3 days ago</small>
//   </div>
//   <p className="mb-1">{todo.description}</p>
//   <small className="badge badge-danger" onClick={this.deleteHandler}>Delete</small> <small className="badge badge-info" onClick={this.updateHandler}>Update</small>
// </li>
//   })
  console.log(props)
  return (
   <div>
    {
     props.todos.map((todo) =>
         <li className="list-group-item list-group-item-action" key={todo._id}>
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1 text-capitalize">{todo.name}</h5>
          <small>3 days ago</small>
        </div>
        <p className="mb-1">{todo.description}</p>
        <small className="badge badge-danger" onClick={props.delete} id={todo._id}>Delete</small> <small className="badge badge-info" onClick={props.edit}>Edit</small>
      </li>
    )
    }
   </div>

  )
}

export default TodoList
