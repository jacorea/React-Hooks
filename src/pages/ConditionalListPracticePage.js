import React, { Component } from 'react'

import ValidationComponent from '../praxComponents/ValidationComponent/ValidationComponent';
import CharComponent from '../praxComponents/CharComponent/CharComponent';
import '../containers/App.css';

export class conditionalListPracticePage extends Component {
    state = {
        text: '',
        length: 0
    }
  
    inputChangeHandler = (event) => {
       this.setState({length: event.target.value.length, text: event.target.value })
    }

    handleClick = (charIndex) => {
        let text = [...this.state.text];
        let {length} = this.state;
        //deleting chosen letter
        text.splice(charIndex,1);
        //need to convert back to string 
        text= text.join('');
        //updating length as delete letters
        length = text.length

        this.setState({text: text, length: length })

    }
  
    render() {
        const {length, text } = this.state;
        let name = text.split('').map((char, index)=> {
            return (
                <CharComponent key={index} letter={char} click={()=>this.handleClick(index)} />
            )
        })

    return (
      <div className="App">
        <input onChange={this.inputChangeHandler} value={text} />
        <p>{this.state.length}</p>

        <ValidationComponent textLength={length}  />
        {name}
      </div>
    )
  }
}

export default conditionalListPracticePage;
