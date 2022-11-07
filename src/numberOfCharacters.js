import React, { Component } from 'react'
import { ErrorAlert } from './alert'

class NumberOfCharacters extends Component {

  state = {
    NumberOfCharacters: 10,
    errorText: '',
  };

  handleInputChanged = (character) => {
    const value = character.target.value;
    if (value < 1 || value > 31) {
      this.setState({
        errorText: 'Enter a number from 1 to 30',
        NumberOfCharacters: value
      });
    } else {
      this.setState({
        errorText: '',
        NumberOfCharacters: value,
      });
      this.props.updatedCharacterCount(character.target.value);
    }
  };

  render() {
    const numberOfCharacters = this.state.numberOfCharacters;
    return (
      <div className="number-of-characters">
        <h3>Number of Characters</h3>
        <ErrorAlert className="number-of-characters-error-alert" text={this.state.errorText} />
        <input type="text" className="characters-number" value={numberOfCharacters} onChange={(e) => this.handleInputChanged(e)} />
      </div>
    )
  }
}


export default NumberOfCharacters