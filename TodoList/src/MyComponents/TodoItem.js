import React from 'react'

const TodoItem = (props) => {
  return (
    <div className='container my-2'>

        <h4>{props.todo.taskname}</h4>
        <p>{props.todo.description}</p>
        <button className='btn btn-sm btn-danger' onClick = {()=>{props.onDelete(props.todo)}}> Delete</button>
        <button className='m-1 btn btn-sm btn-success' onClick = {()=>{props.onEdit(props.todo)}}> Edit</button>
    </div>
  )
}

export default TodoItem
