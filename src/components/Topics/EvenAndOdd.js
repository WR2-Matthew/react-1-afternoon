import React, { Component } from 'react'

export default class EvenAndOdd extends Component {
  constructor() {
    super()

    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.value]: e.target.value
    })
  }

  split = (userInput) => {
    let arr = userInput.split(',');
    let evens = [];
    let odds = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        evens.push(parseInt(arr[i], 10));
      } else {
        odds.push(parseInt(arr[i], 10));
      }
    }

    this.setState({ evenArray: evens, oddArray: odds });
  }

  render() {
    const { userInput } = this.state
    return (

      <div className="puzzleBox evenAndOddPB">
        <h4> Evens and Odds </h4>
        <input className='inputLine' name='userInput' value={userInput} onChange={(e) => this.handleChange(e)} />
        <button className='confirmationButton' onClick={() => this.split(userInput)}></button>
        <span className='resultsBox'></span>
        <span className='resultsBox'></span>
      </div>

    )
  }
}