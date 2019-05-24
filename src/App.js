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
      pokemonPics: []
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
      this.setState({ pokemonPics: pics})
    })
  }

  render(){
    return (
      <div className="App">
        <Nav />
        <CardContainer images={this.state.pokemonPics}/>
      </div>
    );
  }

}

export default App;
