import './App.css';
import Header from './MyComponents/Header.js';
import Todos from './MyComponents/Todos.js';
import Footer from './MyComponents/Footer.js';
import AddTodo from './MyComponents/AddTodo';
import About from './MyComponents/About';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  let initialItems=[];
  // const [title,setTitle] = useState("");
  // const [desc,setDesc] = useState("");

  const onUpdate = (item)=>{
    console.log(item.id);
  }
  const onDelete = (item)=>{
    const deleteTodo = async (todoId) => {
      try {
        console.log(todoId)
        await axios.delete(`http://localhost:8000/api/delete/${todoId}/`); 
        //to display the change
        setitems(items.filter((e)=>{
          return e!==item;
        })) 
        console.log('Todo item deleted successfully');
      } catch (error) {
        console.error('Error deleting todo item:', error);
      }
    };
    // console.log(item.id)
    console.log(item);
    deleteTodo(item.id);
  }
  
  const [items,setitems] = useState(initialItems)
  let addTodo = (title,desc)=>{
    // console.log(title,desc);
    // let sno;
    // if(items.length===0) sno = 1;
    // else sno = items[items.length-1].id+1;
    const mytodo = {
      id : 0,
      taskname: title,
      description: desc
    }
    const sendDataToDjango = async (data) => {
      try {
        const response = await axios.post('http://localhost:8000/api/create/', data);
        console.log('Data sent successfully:', response.data);
        mytodo.id = response.data.id
      } catch (error) {
        console.error('Error sending data:', error);
      }
    };
    sendDataToDjango(mytodo);
    // console.log("sn :" + sno);
    setitems([...items,mytodo]);
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/list/');
        // console.log(response.data[0].id)
        setitems([...response.data]);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  },[]);

  return (
    <>
    <Router>
      <Header title="My-todos-list" searchbar={true}/>
      <Routes>
          <Route exact path="/about" Component={About}></Route>
          <Route exact path="/" Component = {()=>{
            return (
              <>
                <AddTodo addTodo = {addTodo}/>
                <Todos items = {items} onDelete = {onDelete} onUpdate = {onUpdate}/>
                {/* <Todos items = {items} onUpdate = {onUpdate}/> */}
              </>
            )
          }}>
          </Route>
        </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;