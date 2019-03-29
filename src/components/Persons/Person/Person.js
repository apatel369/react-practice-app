import React, { Component } from "react";
import classes from "./Person.css";

class Person extends Component {
  render() {
    console.log("person js remder");
    return (
      <div className={classes.Person}>
        <p onClick={this.props.click}>
          {this.props.name} is {this.props.age} years old
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    );
  }
}

export default Person;