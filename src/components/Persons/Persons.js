import React, { Component } from "react";
import Person from "./Person/Person.js";

class Persons extends Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('persons js get derivedstatefromprops');
  //   return state;
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('persons jsshouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProp, prevState){
    console.log('persons.js getSnapshotBeforeUpdate');
    return { messsage: 'Snapshot'};
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('persons.js componentdidupdate');
    console.log(snapshot);
  }
  
  componentWillUnmount(){
    console.log('persons.js componentWillUnmount');
  }

  render() {
    console.log('persons.js rendering');
    return this.props.persons.map((person, index) => {
      return (
        <Person
          name={person.name}
          age={person.age}
          key={person.id}
          changed={event => this.props.changed(event, person.id)}
          click={() => this.props.clicked(index)}
        />
      );
      });
  }
}

export default Persons;
