import React from "react";

const About = () => {
  let myStyle = {
    minHeight: "90vh",
    position: "Relative",
  };
  return (
    <div style={myStyle}>
      <h3>About</h3>
      <p>
        Welcome to MyTodoApp – your go-to task management solution designed to
        simplify your daily life! Our web application, powered by React.js,<br/>
        provides an intuitive and efficient way to organize your tasks, boost
        productivity, and ensure you never miss a deadline.
      </p>
    </div>
  );
};

export default About;
