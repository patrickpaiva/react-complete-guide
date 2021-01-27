import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'

class App extends Component {
  state = {
    inputLength: 0,
    inputArr: [],
    inputText: ''
  }

  inputChangeHandler = (event) => {
    const sentence = event.target.value
    const sentenceArr = sentence.split('')
    
    this.setState({
      inputLength: sentenceArr.length,
      inputArr: [...sentenceArr],
      inputText: sentence
    })
  }

  clickCharHandler = (index) => {
    const newInputArr = [...this.state.inputArr]
    newInputArr.splice(index, 1)
    const newInput = newInputArr.join('')

    this.setState({
      inputLength: newInputArr.length,
      inputArr: [...newInputArr],
      inputText: newInput
    })
  }
  render() {
    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <div>
          <p>Current Length: {this.state.inputLength}</p>
          <input type="text" value={this.state.inputText} onChange={(event) => this.inputChangeHandler(event)}/>
          <ValidationComponent textLength={this.state.inputLength} />
          <div>
            { this.state.inputArr.map((char, index) => {
              return <CharComponent key={index} char={char} click={() => this.clickCharHandler(index)} />
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
