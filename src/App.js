import React from 'react';
import Menu from './components/Menu'
import CardContainer from './containers/CardContainer'
import './App.css';
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
        <Menu />
        <CardContainer />
      </div>
    );
  }

}

export default App;
