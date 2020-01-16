import React from 'react'
import './Person.css';
import styled from 'styled-components';

const Person = (props)=> {

  const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  @media (min-width: 500px) {
    width: 450px;
  }
`
  return (
    
      <StyledDiv>
        <p onClick={props.click}>Hello, I am {props.name}, and I am {props.age} years old.</p>
        <input type="text" onChange={props.changed} value={props.name} />
      </StyledDiv>
  )
}

export default Person;
