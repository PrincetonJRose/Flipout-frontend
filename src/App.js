import React from 'react';
import Nav from './components/Nav'
import CardContainer from './containers/CardContainer'
import './App.css'
const pokeURL = `http://localhost:3000/pokemon/`

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      pokemon: [],
      turnOver: 0,
    }
  }

  componentDidMount() {
    fetch(pokeURL)
    .then(res => res.json())
    .then(pokemonData => {
      let addFlipped = pokemonData.map( pokemon => {
        return {...pokemon, isFlipped: false}
      })
      let addMatched = addFlipped.map( pokemon => {
        return {...pokemon, isMatched: false}
      })
      this.setState({ pokemon: addMatched })
    })
  }

  checkTurnOver =()=> {
    if (this.state.turnOver < 2) {
      this.setState({
        turnOver: this.state.turnOver + 1
      })
    }
    if (this.state.turnOver === 2) {
      setTimeout( this.resetTurnOver, 3000)
    }
  }

  resetTurnOver =()=> {
    let flipAll = this.state.pokemon.map( pokemon => {
      pokemon.isFlipped = false
      return pokemon
    })
    this.setState({
      turnOver: 0,
      pokemon: flipAll
    })
  }

  flipCard =(pokemonFlip)=> {
    let flip = this.state.pokemon.map( pokemon => {
      if (pokemon.id === pokemonFlip.id) {
        pokemon.isFlipped = true
        return pokemon
      } else {
        return pokemon
      }
    })
    this.setState({ pokemon: flip })
  }

  render(){
    return (
      <div className="App">
        <Nav />
        <CardContainer pokemon={this.state.pokemon} flipCard={this.flipCard} checkTurnOver={this.checkTurnOver}/>
      </div>
    );
  }

}

export default App;
