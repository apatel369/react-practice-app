import React from 'react';
import classes from './Person.css';

const Person = (props) => {
    console.log('person js remder');
    return (
        <div className={classes.Person}>
        <p onClick={props.click}>{props.name} is {props.age} years old</p>
        <p>{props.children}</p>
        <input type='text' onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default Person;