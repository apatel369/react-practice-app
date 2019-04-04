import React, { useEffect, useRef, useContext} from "react";
import classes from "./Cockpit.css";
import AuthContext from "../../context/auth-context";

const cockpit = props => {
  const toggleBtnRef =  useRef(null);
  const authContext = useContext(AuthContext);

  console.log(authContext.authenticated);
 
  useEffect(() => {
    console.log('[cockpit.js useeffect');
    
    // setTimeout(() => {
    //   alert("saved data");
    // }, 1000);
    toggleBtnRef.current.click();

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

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }
  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>Das na Das</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
        <button onClick={authContext.login}>Log in</button>
    </div>
  );
}

export default React.memo(cockpit);
