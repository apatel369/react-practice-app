/* eslint-disable react/no-typos */
import React, { Component, Fragment } from "react";
import withClass from "../../../hoc/withClass";
import classes from "./Person.css";
import PropTypes from "prop-types";
import AuthContext from "../../../context/auth-context";

class Person extends Component {
  constructor(props) {
    super(props);
    this.inutElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    // this.inutElement.focus();
    this.inutElementRef.current.focus();
    console.log(this.context.authenticated);
  }

  render() {
    console.log("person js remder");
    return (
      <Fragment>
        {this.context.authenticated ? (
          <p>Authenticated!</p>
        ) : (
          <p>Please log in</p>
        )}

        <p onClick={this.props.click}>
          {this.props.name} is {this.props.age} years old
        </p>
        <p>{this.props.children}</p>
        <input
          // ref={(inputEl) => {this.inutElement = inputEl}}
          ref={this.inutElementRef}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Fragment>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);
