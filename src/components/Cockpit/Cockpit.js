import React, { useEffect } from "react";
import classes from "./Cockpit.css";

const cockpit = props => {
  useEffect(() => {
    console.log('[cockpit.js useeffect');
    
    setTimeout(() => {
      alert("saved data");
    }, 1000);
    return() => {
      console.log('[Cockpit.js] cleanup');
    };
  }, []);

  useEffect(() => {
    console.log('cockpitjs 2nd useEffect')
    return () => {
      console.log('cockpitjs cleanup 2nd useEffect')
    };
  })


  const assignedClasses = [];
  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }
  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>Das na Das</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;
