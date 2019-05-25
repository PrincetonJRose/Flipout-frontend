import React from 'react';
import Nav from './components/Nav'
import CardContainer from './containers/CardContainer'
import './App.css'
const pokeURL = `http://localhost:3000/pokemon/`

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      pokemon: [],
      turnOver: 0,
      numColumns: 4,
      cardTotal: 16,
      compare: [],
      gameDeck: [],
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
      this.generateBoard()
      let indexPosition = -1
      let addIndex = this.state.gameDeck.map( pokemon => {
        indexPosition += 1
        return {...pokemon, index: indexPosition}
      })
      this.setState({ gameDeck: addIndex })
    })
  }

  checkTurnOver =()=> {
    if (this.state.turnOver < 2) {
      if (this.state.turnOver + 1 == 2) {
        this.setState({ turnOver: this.state.turnOver + 1 })
        setTimeout( this.resetTurnOver, 1600 )
      }
      this.setState({
        turnOver: this.state.turnOver + 1
      })
    }
    if (this.state.turnOver === 2) {
      setTimeout( this.resetTurnOver, 1600 )
    }
  }

  resetTurnOver =()=> {
    this.compareMatch()
    let flipAll = this.state.gameDeck.map( pokemon => {
      if (pokemon.isMatched) {
        pokemon.isFlipped = true
        return pokemon
      } else {
        pokemon.isFlipped = false
        return pokemon
      }
    })
    this.setState({
      turnOver: 0,
      pokemon: flipAll
    })
  }

  flipCard =(pokemonFlip)=> {
    let flip = this.state.gameDeck.map( pokemon => {
      if (pokemon.index === pokemonFlip.index) {
        pokemon.isFlipped = true
        return pokemon
      } else {
        return pokemon
      }
    })
    this.setState({ pokemon: flip })
    if (this.state.compare.length < 2) {
      let compare = this.state.compare
      compare.push(pokemonFlip)
      this.setState({
        compare: compare
      })
    }
    this.checkTurnOver()
  }

  compareMatch =()=> {
    let compare = this.state.compare
    if (compare.length == 2 && compare[0].id === compare[1].id) {
      let match = this.state.gameDeck.map( pokemon => {
        if (pokemon.index === compare[0].index || pokemon.index === compare[1].index) {
          pokemon.isMatched = true
          return pokemon
        } else {
          return pokemon
        }
      })
      this.setState({
        gameDeck: match,
        compare: [],
      })
    } else if (compare.length == 2 && compare[0].id !== compare[1].id) {
      this.setState({ compare: [] })
    }
    let count = 0
    this.state.gameDeck.map( pokemon => {
      if (pokemon.isMatched) {
        count += 1
      }
    })
    if (count === this.state.gameDeck.length) {
      this.gameWin()
    }
  }

  generateBoard =()=> {
    let randomSelection = []
    for (let i = 0; i < this.state.cardTotal; i++) {
      randomSelection.push(false)
    }
    console.log(randomSelection.length)
    for (let i = 0; i < (this.state.cardTotal/2); i++) {
      let randomIndex = Math.round(Math.random() * this.state.pokemon.length)
      let randomPosition 
      while (true) {
        randomPosition = Math.round(Math.random() * (this.state.cardTotal - 1))
        if (randomSelection[randomPosition] == false) {
          console.log("card 1", randomPosition)
          randomSelection.splice(randomPosition, 1, this.state.pokemon[randomIndex])
          break
        }
      }
      while (true) {
        randomPosition = Math.round(Math.random() * (this.state.cardTotal - 1))
        if (randomSelection[randomPosition] == false) {
          console.log("card 1", randomPosition)
          randomSelection.splice(randomPosition, 1, this.state.pokemon[randomIndex])
          break
        }
      }
    }
    this.setState({
      gameDeck: randomSelection
    })
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <CardContainer pokemon={this.state.gameDeck} flipCard={this.flipCard} checkTurnOver={this.checkTurnOver} turnOver={this.state.turnOver} numColumns={this.state.numColumns}/>
      </div>
    )
  }
}
