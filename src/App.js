import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
      persons: [
        {
          name:'Swamiji', age:'86'
        },
        {
          name:'ProbodhSwamiji', age:'63'
        },
        {
          name:'Saradta-Vishwas', age:'86'
        }
      ],
      otherState:"other value",
      showPersons: false
    };

  switchNameHandler = (newName) => {
  // console.log("clicked");
  // this.state.persons[0].name = 'HAri Hari';
  this.setState( {
    persons: [
      {
        name: newName, age:'86'
      },
      {
        name:'ProbodhSwamiji', age:'63'
      },
      {
        name:'Saradta-Vishwas', age:'87'
      }
    ]
  }
)
}

  nameChangedHandler = (event) => {
  this.setState( {
    persons: [
      {
        name: 'P.Swamiji', age:'86'
      },
      {
        name: event.target.value, age:'63'
      },
      {
        name:'Saradta-Vishwas', age:'87'
      }
    ]
  }
)
}
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }
  togglePersonsHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({
    showPersons: !doesShow
  })
}

render(){
  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

  let persons = null;
  if(this.state.showPersons){
    persons = (
      <div>
        {this.state.persons.map((person, index) => {
            return <Person
            name={person.name}
            age={person.age}
            key={person.name}
            click={() => this.deletePersonHandler(index)}/>
          }
        )}
      </div>
    )
  } 
    return (
      <div className="App">
        <h1>Jay Swaminarayan</h1>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
      </div>
    );
  }
}

export default App;