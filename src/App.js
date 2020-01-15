import React, { Component } from 'react';
import './App.css';
import Person from './components/Person/Person';



class App extends Component {
  state = {
    persons: [
      {name: 'Jon', age: 28},
      {name: 'Tom', age: 18},
      {name: 'Sam', age: 20}
    ]
  }

  switchNameHandler = (newName) => {
    // console.log('button clicked!')
    this.setState({persons: [
      {name: newName, age: 24 },
      {name: 'Jenny', age: 19 },
      {name: 'Karl', age: 22 }
    ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        {name: 'Jon', age: 24 },
        {name: event.target.value, age: 19 },
        {name: 'Karl', age: 22 }
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: '#ccc',
      font: 'inherit',
      border: '1px solide white',
      padding: '8px',
      color: '#eee'
    }

    const { persons } = this.state;
    return (
      <div className="App">
        <h1>I'm a React App</h1>
        <button style={style} onClick={this.switchNameHandler.bind(this, "Max!")} >Switch Name</button>
        <Person name={persons[0].name} age={persons[0].age} changeName={()=>this.switchNameHandler("AJ")}/>
        <Person name={persons[1].name} age={persons[1].age} changed={this.nameChangedHandler}/>
        <Person name={persons[2].name} age={persons[2].age} />
      </div>
    );
  }
}

export default App;
