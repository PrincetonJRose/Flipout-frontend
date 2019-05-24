import React from 'react';
import Nav from './components/Nav'
import { Rating } from 'semantic-ui-react'
import CardContainer from './containers/CardContainer'
import './App.css'
const pokeURL = `http://localhost:3000/pokemon/`

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      pokemon: [],
<<<<<<< HEAD
      pokemonPics: []
=======
      turnOver: 0,
      numColumns: 8,
>>>>>>> 097714c40a705175f61f02f7ba15b5cc6436ee82
    }
  }

  componentDidMount() {
    fetch(pokeURL)
    .then(res => res.json())
    .then(pokemonData => {
      this.setState({ pokemon: pokemonData })
      let pics = this.state.pokemon.map( pokemon => {
        return pokemon.sprites.front
      })
<<<<<<< HEAD
      this.setState({ pokemonPics: pics})
=======
      let addMatched = addFlipped.map( pokemon => {
        return {...pokemon, isMatched: false}
      })
      this.setState({ pokemon: addMatched })
    })
  }

  checkTurnOver =()=> {
    if (this.state.turnOver < 2) {
      if (this.state.turnOver + 1 == 2) {
        setTimeout( this.resetTurnOver, 2000)
      }
      this.setState({
        turnOver: this.state.turnOver + 1
      })
    }
    if (this.state.turnOver === 2) {
      setTimeout( this.resetTurnOver, 2000)
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
>>>>>>> 097714c40a705175f61f02f7ba15b5cc6436ee82
    })
    this.setState({ pokemon: flip })
    this.checkTurnOver()
  }

  render(){
    return (
      <div className="App">
        <Nav />
<<<<<<< HEAD
        <CardContainer images={this.state.pokemonPics}/>
=======
        <CardContainer pokemon={this.state.pokemon} flipCard={this.flipCard} checkTurnOver={this.checkTurnOver} turnOver={this.state.turnOver} numColumns={this.state.numColumns}/>
>>>>>>> 097714c40a705175f61f02f7ba15b5cc6436ee82
      </div>
    );
  }

}

export default App;
