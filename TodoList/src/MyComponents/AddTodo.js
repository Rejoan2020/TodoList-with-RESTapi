import React, { useState } from 'react'

var f1 = false,f2 = false;

const AddTodo = (props) => {
  let oc1 =(val)=>{
    console.log(f1)
    f1 = true;f2 = false;
    props.setTitle(val);
  }
  let oc2 =(val)=>{
    props.setDesc(val);
    f2 = true;f1 = false;
  }

  let submit =(btype)=>(e)=>{
    e.preventDefault();    
    if(!props.title || !props.desc)alert("Title or Description is missing !");
    else{
      if(btype==="submit"){
          props.addTodo(props.title,props.desc);
        }
      else if(btype==="update"){
        // console.log("update");
        props.onUpdate();
      }
      props.setDesc("");
      props.setTitle("");
      f1 = false;
      f2 = false;
    }
  }

  return (
    <div className='container'>
        <h3>Add todo</h3>
        <form onSubmit={submit}>
        <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" autoFocus={f1} value={props.title} style={{ width: '50%', height: '2%' }} className="form-control" onChange={(e)=>{oc1(e.target.value)}} id="title"/>
        </div>
        <div className="mb-3">
            <label htmlFor="desc" className="form-label">Description</label>
            <input type="text" autoFocus={f2} value = {props.desc} style={{ width: '50%', height: '2%' }} className="form-control" onChange={(e)=>{oc2(e.target.value)}} id="text"/>
        </div>
        
        <button type="submit"  onClick={submit('submit')} className="btn btn-sm btn-success">Add</button>
        <button type="submit"  onClick={submit('update')} className="m-1 btn btn-sm btn-success">Update</button>
        </form>
    </div>
  )
}

export default AddTodo
