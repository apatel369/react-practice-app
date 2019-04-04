import React, { PureComponent } from "react";
import Person from "./Person/Person.js";
import AuthContext from "../../context/auth-context"

class Persons extends PureComponent {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('persons js get derivedstatefromprops');
  //   return state;
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('persons jsshouldComponentUpdate');
  //   if (
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked 
  //   ){
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

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

    return (
    <AuthContext.Consumer>
    { (context) => this.props.persons.map((person, index) => {
      return (
        <Person
          name={person.name}
          age={person.age}
          key={person.id}
          changed={event => this.props.changed(event, person.id)}
          click={() => this.props.clicked(index)}
          isAuth={this.props.isAuthenticated}
        />
      );
      })
  }
  </AuthContext.Consumer>
  );
}
}

export default Persons;
