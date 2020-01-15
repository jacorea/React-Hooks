import React, { Component } from 'react'
import Person from '../components/Person/Person';
import '../App.css';


export class personPage extends Component {
     state = {
          persons: [
            {id: 1 , name: 'Jon', age: 28},
            {id: 2 , name: 'Tom', age: 18},
            {id: 3 , name: 'Sam', age: 20}
          ],
          showPersons: false
        }

    deletePersonHandler = (personIndex) => {
      const persons = [...this.state.persons];
      persons.splice(personIndex,1);
      this.setState({ persons: persons })
    }
  
    nameChangedHandler = ( event, id ) => {
      const personIndex = this.state.persons.findIndex(p => {
        return p.id === id;
      });

      const person = {
        ...this.state.persons[personIndex]
      };

      person.name = event.target.value;

      const persons= [...this.state.persons];
      persons[personIndex] = person;

      this.setState({ persons: persons })
    }

    togglePersonHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({ showPersons: !doesShow })
    }

  render() {
      const style = {
        backgroundColor: '#ccc',
        font: 'inherit',
        border: '1px solide white',
        padding: '8px',
        color: '#eee'
      }

      let currentPersons = null;
      const { persons,showPersons } = this.state;

      if(showPersons) {
        currentPersons = (
          <div>
          {persons.map((person, index) => {
          return (
            <Person 
              key={person.id} 
              name={person.name} 
              age={person.age} 
              click={()=>this.deletePersonHandler(index)}
              changed={(event)=> this.nameChangedHandler( event, person.id)} /> )
          } 
        )}
        </div>
      )}
    return (
      <div className="App">
        <h1>I'm a React App</h1>
        <button style={style} onClick={this.togglePersonHandler} >Toggle Persons</button>
        {currentPersons}
      </div>
    )
  }
}

export default personPage
