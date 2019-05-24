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
    }
  }

  componentDidMount() {
    fetch(pokeURL)
    .then(res => res.json())
    .then(pokemonData => {
      this.setState({ pokemon: pokemonData })
    })
  }
  
  render(){
    return (
      <div className="App">
        <Nav />
        <CardContainer pokemon={this.state.pokemon}/>
      </div>
    );
  }

}

export default App;
