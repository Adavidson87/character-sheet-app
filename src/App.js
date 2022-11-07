import React, { Component } from 'react';
import Character from './character';
import CharacterList from './characterList';
import NumberOfCharacters from './numberOfCharacters';
// import WelcomeScreen from './WelcomeScreen';
import './App.css';

class App extends Component {
  state = {
    characters: [],
    numberOfCharacters: 10,
    // showWelcomeScreen = undefined,
  }

  updateCharacters = (characterName) => {
    getCharacters().then((characters) => {
      const namedCharacters = (characterName === 'all') ? characters.slice(0, this.state.numberOfCharacters) : characters.filter((character) => character.characterName === characterName);
      this.setState({
        characters: namedCharacters.slice(0, this.setState.numberOfCharacters),
        currentCharacters: characterName
      });
    });
  }

  updateCharacterCount = (characterCount) => {
    const { currentCharacters } = this.state;
    this.setState({
      numberOfCharacters: characterCount
    });
    this.updateCharacterCount(currentCharacters, characterCount);
  }

  componentDidMount() {
    this.mounted = true;
    // this.setState({showWelcomeScreen: true})
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    // if (this.state.showWelcomeScreen === undefined) return <div className="App" />
    return (
      <div className='App'>
        <div className='topOfPage'><h1>My Characters</h1></div>
        <div className='myCharacterList'>

        </div>
      </div>
      // <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen} />
    )
  }

}

export default App;
