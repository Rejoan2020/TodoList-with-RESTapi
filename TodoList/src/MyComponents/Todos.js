import React from "react";
import TodoItem from "./TodoItem";

const Todos = (props) => {
  const containerStyle = {
    minHeight: "60vh",
    // margin: '30px 0 0 0px',
    backgroundColor: "white",
    padding: "20px",
    width: "50%",
    // justifyContent: 'center',
    // alignItems: 'center',
  };
  return (
    <div className="container" style={containerStyle}>
      <div>
        <h3>
          <strong>Todos list</strong>
        </h3>
        {props.items.length === 0
          ? "No items to display"
          : props.items.map((item) => {
              return (
                <TodoItem
                  todo={item}
                  key={item.sn}
                  onDelete={props.onDelete}
                  onEdit={props.onEdit}
                />
              );
            })}
      </div>
    </div>
  );
};

export default Todos;
