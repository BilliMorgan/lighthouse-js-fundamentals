import React, { Component } from "react";
import "./App.css";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  state = {
    usernames: [
      { username: "Max" },
      { username: "Igor" },
      { username: "Abdurakhman Hutub" },
    ],
  };

  usernameChangeHandler = (event) => {
    this.setState({
      usernames: [
        { username: "Max" },
        { username: event.target.value},
        { username: "Abdurakhman Hutub" },
      ],
    });
  }

  render() {
    
    return (
      <div>
        <h1> First assignment here</h1>
        <div>
          <UserInput
            changed={this.usernameChangeHandler}
            currentname={this.state.usernames[1].username}
          />
        </div>
        <UserOutput username={this.state.usernames[0].username} />
        <UserOutput username={this.state.usernames[1].username} />
        <UserOutput username={this.state.usernames[2].username} />
      </div>
    );
  }
}

export default App;
