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
      <div >
      <Person
        name={this.state.persons[0].name}
        age={this.state.persons[0].age} />
      <Person
        name={this.state.persons[1].name}
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, 'P.ProbodhSwamiji')}
        changed={this.nameChangedHandler}>Adarsh</Person>
      <Person
        name={this.state.persons[2].name}
        age={this.state.persons[2].age} />
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