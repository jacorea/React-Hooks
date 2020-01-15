import React from 'react'
import './Person.styles.css';

export default function Person(props) {
  return (
    <div className="Person">
      <p onClick={props.changeName}>Hello, I am {props.name}, and I am {props.age} years old.</p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  )
}
