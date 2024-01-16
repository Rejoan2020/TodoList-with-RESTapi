import React from "react";

const About = () => {
  let myStyle = {
    minHeight: "90vh",
    // position: "Relative",
    backgroundColor: "white",
    width:"30%",
    padding: "20px"
  };
  
  return (
    <div style={myStyle}>
      <h1>About</h1>
      <br></br>
      <p>
        <h4>features</h4>
        <ul>
          <li>
            Create
          </li>
          <li>
            Read
          </li>
          <li>
            Update
          </li>
          <li>
            Delete
          </li>
        </ul>
      </p>
    </div>
  );
};

export default About;
