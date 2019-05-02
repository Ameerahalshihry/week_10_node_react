import React from 'react'

const Form = (props) => {
 console.log(props)
  return (
    <div>
     <div className="form-group">
      <input name="name" placeholder="todo name" onChange={props.change} value={props.name} className="form-control"/>
     </div>
     <div className="form-group">
      <textarea
      className="form-control" name="description" onChange={props.change}>{props.description}</textarea>
     </div>
     <button
      className="btn btn-danger btn-block"
      onClick={props.submit}> Create</button>
    </div>
  )
}

export default Form
