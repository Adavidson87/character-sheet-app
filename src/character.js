import React, { Component } from 'react'

class Character extends Component {

  state = {
    show: false,
  }

  handleButton = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  render() {
    let character = this.props.character;
    let characterRace = `${character.characterRace}`
    let characterClass = `${character.characterClass}`

    return (
      <div className="character">
        <ul className="character-info">

          <li className="_id">123456789</li>
          <li className="character-name">Test</li>
          <li className="character-race">Human</li>
          <li className="character-class">Fighter</li>
          <li className="character-lvl">1</li>
          <li className="initative">0</li>
          <li className="character-speed">30</li>

          {/* Attributes */}
          <li className="str">10</li>
          <li className="dex">10</li>
          <li className="con">10</li>
          <li className="int">10</li>
          <li className="wis">10</li>
          <li className="cha">10</li>
          <li className="str-mod">0</li>
          <li className="dex-mod">0</li>
          <li className="con-mod">0</li>
          <li className="int-mod">0</li>
          <li className="wis-mod">0</li>
          <li className="cha-mod">0</li>

          {/* Hit Points */}
          <li className="hp-current">10</li>
          <li className="hp-total">10</li>
          <li className="hp-temp">0</li>

          {/* Defenses */}
          <li className="armor-class">10</li>
          <li className="resistances">Placeholder</li>
          <li className="immunities">Placeholder</li>
          <li className="vunerabilities">Placeholder</li>
          <li className="conditions">Placeholder</li>

          {/* Saving Throws */}
          <li className="str-saving-throw">0</li>
          <li className="dex-saving-throw">0</li>
          <li className="con-saving-throw">0</li>
          <li className="int-saving-throw">0</li>
          <li className="wis-saving-throw">0</li>
          <li className="cha-saving-throw">0</li>
          <li className="str-saving-throw-prof">False</li>
          <li className="dex-saving-throw-prof">False</li>
          <li className="con-saving-throw-prof">False</li>
          <li className="int-saving-throw-prof">False</li>
          <li className="wis-saving-throw-prof">False</li>
          <li className="cha-saving-throw-prof">False</li>

          {/* Senses */}
          <li className="passive-perception">10</li>
          <li className="passive-investigaion">10</li>
          <li className="passive-insight">10</li>
          <li className="darkvision">0</li>

          {/* Proficiencies */}
          <li className="prof-bonus">3</li>
          <li className="armor-prof">Placeholder</li>
          <li className="wepaon-prof">Placeholder</li>
          <li className="tool-prof">Placeholder</li>
          <li className="languages">Common</li>

          {/* Skills */}
          <li className="acrobatics-prof">False</li>
          <li className="acrobatics-mod">0</li>
          <li className="acrobatics-bonus">0</li>

          <li className="animalHandling-prof">False</li>
          <li className="animalHandling-mod">0</li>
          <li className="animalHandling-bonus">0</li>

          <li className="arcana-prof">False</li>
          <li className="arcana-mod">0</li>
          <li className="arcana-bonus">0</li>

          <li className="athletics-prof">False</li>
          <li className="athletics-mod">0</li>
          <li className="athletics-bonus">0</li>

          <li className="deception-prof">False</li>
          <li className="deception-mod">0</li>
          <li className="deception-bonus">0</li>

          <li className="history-prof">False</li>
          <li className="history-mod">0</li>
          <li className="history-bonus">0</li>

          <li className="insight-prof">False</li>
          <li className="insight-mod">0</li>
          <li className="insight-bonus">0</li>

          <li className="intimidation-prof">False</li>
          <li className="intimidation-mod">0</li>
          <li className="intimidation-bonus">0</li>

          <li className="investigation-prof">False</li>
          <li className="investigation-mod">0</li>
          <li className="investigation-bonus">0</li>

          <li className="medicine-prof">False</li>
          <li className="medicine-mod">0</li>
          <li className="medicine-bonus">0</li>

          <li className="nature-prof">False</li>
          <li className="nature-mod">0</li>
          <li className="nature-bonus">0</li>

          <li className="perception-prof">False</li>
          <li className="perception-mod">0</li>
          <li className="perception-bonus">0</li>

          <li className="performance-prof">False</li>
          <li className="performance-mod">0</li>
          <li className="performance-bonus">0</li>

          <li className="persuasion-prof">False</li>
          <li className="persuasion-mod">0</li>
          <li className="persuasion-bonus">0</li>

          <li className="religion-prof">False</li>
          <li className="religion-mod">0</li>
          <li className="religion-bonus">0</li>

          <li className="sleightOfHand-prof">False</li>
          <li className="sleightOfHand-mod">0</li>
          <li className="sleightOfHand-bonus">0</li>

          <li className="stealth-prof">False</li>
          <li className="stealth-mod">0</li>
          <li className="stealth-bonus">0</li>

          <li className="survival-prof">False</li>
          <li className="survival-mod">0</li>
          <li className="survival-bonus">0</li>

          {/* Spells */}
          <li className="spellList">Spells</li>

          {/* Inventory */}
          <li className="inventory">Inventory</li>

          {/* Feats */}
          <li className="feats">Feats</li>
          <li className="class-feats">Class Featuress</li>
          <li className="racial-traits">Racial Traits</li>

          {/* Characteristics & Background */}
          <li className="background">Placeholder</li>
          <li className="alignment">Placeholder</li>
          <li className="gender">Placeholder</li>
          <li className="eyes">Placeholder</li>
          <li className="size">Medium</li>
          <li className="height">Placeholder</li>
          <li className="god">Placeholder</li>
          <li className="hair">Placeholder</li>
          <li className="skin">Placeholder</li>
          <li className="age">Placeholder</li>
          <li className="weight">Placeholder</li>
          <li className="personality-traits">Placeholder</li>
          <li className="ideals">Placeholder</li>
          <li className="bonds">Placeholder</li>
          <li className="flaws">Placeholder</li>
          <li className="appearance">Placeholder</li>

          {/* Notes */}
          <li className="organizations">Placeholder</li>
          <li className="allies">Placeholder</li>
          <li className="enemies">Placeholder</li>
          <li className="backstory">Placeholder</li>
        </ul>
      </div>
    )
  }
}

export default Character;