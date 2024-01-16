import "./App.css";
import Header from "./MyComponents/Header.js";
import Todos from "./MyComponents/Todos.js";
import Footer from "./MyComponents/Footer.js";
import AddTodo from "./MyComponents/AddTodo";
import About from "./MyComponents/About";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

let id,
  pressEdit = false;
function App() {
  let initialItems = [];

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const onEdit = (item) => {
    setTitle(item.taskname);
    setDesc(item.description);
    id = item.id;
    pressEdit = true;
  };

  const onDelete = (item) => {
    const deleteTodo = async (todoId) => {
      try {
        await axios.delete(`http://localhost:8000/api/delete/${todoId}/`);
        //to display the change
        setitems(
          items.filter((e) => {
            return e !== item;
          })
        );
        console.log("Todo item deleted successfully");
      } catch (error) {
        console.error("Error deleting todo item:", error);
      }
    };
    deleteTodo(item.id);
  };

  const [items, setitems] = useState(initialItems);

  let addTodo = (title, desc) => {
    const mytodo = {
      id: 0,
      taskname: title,
      description: desc,
    };
    const sendDataToDjango = async (data) => {
      try {
        const response = await axios.post(
          "http://localhost:8000/api/create/",
          data
        );
        mytodo.id = response.data.id;
      } catch (error) {
        console.error("Error sending data:", error);
      }
    };
    sendDataToDjango(mytodo);
    setitems([...items, mytodo]);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/list/");
        setitems([...response.data]);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);
  let onUpdate = () => {
    if (!pressEdit) {
      alert("Please select a specific todo from the list!");
      return;
    }
    let updatedTodo = {
      id: id,
      taskname: title,
      description: desc,
    };
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/list/");
        setitems(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    const updateData = async (id, newData) => {
      try {
        const response = await axios.post(
          `http://localhost:8000/api/update/${id}/`,
          newData
        );
        console.log("Data updated successfully:", response.data);
        await fetchData();
      } catch (error) {
        console.error("Error updating data:", error);
      }
    };
    console.log(id);
    updateData(id, updatedTodo);
    pressEdit = false;
  };
  const containerStyle = {
    backgroundColor: " #5df9da  ",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  };

  return (
    <Router>
      <Header title="Todo App" searchbar={true} />
      <div style={containerStyle}>
        <Routes>
          <Route exact path="/about" Component={About}></Route>
          <Route
            exact
            path="/"
            Component={() => {
              return (
                <>
                  {AddTodo({
                    addTodo: addTodo,
                    setTitle: setTitle,
                    setDesc: setDesc,
                    title: title,
                    desc: desc,
                    onUpdate: onUpdate,
                  })}
                  <Todos items={items} onDelete={onDelete} onEdit={onEdit} />
                </>
              );
            }}
          ></Route>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
