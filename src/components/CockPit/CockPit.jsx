import React from 'react'
import classes from './Cockpit.css';
import styled from 'styled-components';

const StyledButton = styled.button `
  background-color: ${props => props.alt ? 'red' : 'green'};
  font: inherit;
  border: 1px solid white;
  padding: 8px;
  color: white;
  crusor: pointer;
  
  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black;
  }
`;

const CockPit = (props) => {

    let btnClass = '';
    {console.log(classes.Red);}
    if (props.showPersons) {
        btnClass = classes.Red;
        console.log(btnClass);
    }

    const assignedClasses = [];
    if (props.persons.length <= 2) {
      assignedClasses.push( classes.red );
    }
    if (props.persons.length <=1) {
      assignedClasses.push( classes.bold );
    }

  return (
    <div className={classes.CockPit}>
        <h1>I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <StyledButton alt={props.showPersons} onClick={props.click} >Toggle Persons</StyledButton>
    </div>
  )
}

export default CockPit;
