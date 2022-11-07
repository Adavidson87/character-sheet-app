import React, { Component } from 'react'
import Character from './character';
import { WarningAlert } from './alert';

class CharacterList extends Component {
  render() {
    const { characters } = this.props;
    return (
      <div>{!navigator.onLine ? (<WarningAlert text='You are offline, characters may not be fully updated.' />) : (<WarningAlert text=' ' />)}
        <ul className="character-list">
          {characters.map(character =>
            <li key={character.id}>
              <Character character={character} />
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default CharacterList