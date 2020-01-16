import React, { Component } from 'react';
import './App.css';
import PersonPage from '../pages/personPage';
// import CondListPrax from './pages/ConditionalListPracticePage';
// import Person from './components/Person/Person';
// import UserOutput from './components/UserOutput/UserOutput';
// import UserInput from './components/UserInput/UserInput';



class App extends Component {

  render() {
    return (
      <div>
        <PersonPage />
      </div>
    )  
  }
}

export default App;

//state = {
  //     persons: [
  //       {name: 'Jon', age: 28},
  //       {name: 'Tom', age: 18},
  //       {name: 'Sam', age: 20}
  //     ],
  //     userName: [
  //       {user1: 'Angel', age: 28},
  //       {user2: 'Alexi', age: 18},
  //       {user3: 'Messi', age: 30},
  //       {user4: 'Ronaldo', age: 43},
  //     ]
  //   }
  
  //   switchNameHandler = (newName) => {
  //     // console.log('button clicked!')
  //     this.setState({persons: [
  //       {name: newName, age: 24 },
  //       {name: 'Jenny', age: 19 },
  //       {name: 'Karl', age: 22 }
  //     ]
  //     })
  //   }
  
  //   nameChangedHandler = (event) => {
  //     this.setState( {
  //       persons: [
  //         {name: 'Jon', age: 24 },
  //         {name: event.target.value, age: 19 },
  //         {name: 'Karl', age: 22 }
  //       ]
  //     })
  //   }
  
  //   userNameChangeHandler = (event) => {
  //     this.setState({
  //       userName: [
  //         {[event.target.name]: event.target.value, age: 28},
  //         {[event.target.name]: event.target.value, age: 18},
  //         {[event.target.name]: event.target.value, age: 30},
  //         {[event.target.name]: event.target.value, age: 43},
  //       ]
  //     })
  //   }
  
  //   render() {
  //     const style = {
  //       backgroundColor: '#ccc',
  //       font: 'inherit',
  //       border: '1px solide white',
  //       padding: '8px',
  //       color: '#eee'
  //     }
  
  //     const { persons, userName } = this.state;
  //     return (
  //       <div className="App">
  //         <h1>I'm a React App</h1>
  //         <button style={style} onClick={this.switchNameHandler.bind(this, "Max!")} >Switch Name</button>
  //         <Person name={persons[0].name} age={persons[0].age} changeName={()=>this.switchNameHandler("AJ")}/>
  //         <Person name={persons[1].name} age={persons[1].age} changed={this.nameChangedHandler}/>
  //         <Person name={persons[2].name} age={persons[2].age} />
  // {/* 
  //         Assignment to make UserInput and UserOutput Components with dynamic data passing through with username being modified by state */}
  //         <div>
  //           <UserInput user="user1" userName={userName[0].user1} changeUser={this.userNameChangeHandler} />
  //         </div>
          
  //         <div>
  //           <UserOutput userName={userName[0].user1} changeUser={this.userNameChangeHandler} />
  //           <UserOutput userName={userName[1].user2}/>
  //           {/* <UserOutput userName={userName[2].user3} />
  //           <UserOutput userName={userName[3].user4} /> */}
  //         </div>
  //       </div>
  //     );
  //   }