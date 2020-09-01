import React from "react";
import './UserOutput.css';

const userOutput = (props) => {
  return (
    <div className = "UserOutput">
      <p>His username is: {props.username}</p>
      <p>=========Paragraph separation=================</p>
    </div>
  );
};

export default userOutput;
