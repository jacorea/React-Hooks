import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import CockPit from '../components/CockPit//CockPit';
import '../containers/App.css';



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
        backgroundColor: 'green',
        font: 'inherit',
        border: '1px solid white',
        padding: '8px',
        color: 'white',
        crusor: 'pointer',
        ':hover': {
          backgroundColor: 'lightgreen',
          color: 'black '
        }
      }

      let currentPersons = null;
      const { persons,showPersons } = this.state;

      if(showPersons) {
        currentPersons = (
          <div>
            <Persons persons={persons} clicked={this.deletePersonHandler} changed={this.nameChangedHandler} />
          </div>
      )
        style.backgroundColor = 'red';
        style[':hover'] = {
          backgroundColor: 'salmon',
          color: 'black'
        }
    }
    return (
      <div className="App">
        <CockPit showPersons={showPersons} persons={persons} click={this.togglePersonHandler}  />
        {currentPersons}
      </div>
    )
  }
}

export default personPage;
