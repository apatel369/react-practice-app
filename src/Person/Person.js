import React from 'react';
import './Person.css';

const person = (props) => {
    const style = {
    '@media (min-width: 500px)' :{
        width: '450px'
    }
} 
    return (
        <div className='Person' >
        <p onClick={props.click}>{props.name} is {props.age} years old</p>
        <p>{props.children}</p>
        <input type='text' onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default person;