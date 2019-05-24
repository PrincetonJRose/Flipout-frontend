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
        turnOver: this.state.turnOver += 1
      })
      console.log(this.state.turnOver)
    } else if (this.state.turnOver === 2) {
      console.log(this.state.turnOver)
      setTimeout( this.resetTurnOver, 300)
    }
  }

  resetTurnOver =()=> {
    this.setState({
      turnOver: 0
    })
  }

  render(){
    return (
      <div className="App">
        <Nav />
        <CardContainer pokemon={this.state.pokemon} turnOver={this.state.turnOver} checkTurnOver={this.checkTurnOver}/>
      </div>
    );
  }

}

export default App;
