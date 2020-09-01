import React from "react";


const userInput = (props) => {
  const inputStyle = {
    width: "60%",
    cursor: "pointer",
    border: "3px solid green",
    textAlign: "center",
    margin: "auto",
    padding: "18px",
  };
  return (
    <div style={inputStyle}>
      <input type="text" onChange={props.changed} value={props.currentname} />
    </div>
  );
}

export default userInput;
