import React from 'react';
import FlipCard from '../components/FlipCard'
import {Grid, Image} from 'semantic-ui-react'

const pokemon = [
  'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/bulbasaur.png',
  'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/charmander.png',
  'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/bulbasaur.png',
  'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/charmander.png',
  'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/squirtle.png',
  'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/squirtle.png',
]

function createGrid(numColumns, images){
  return(
    <Grid container columns={numColumns}>
      {images.map(img=>(
        <Grid.Column key={img}>
           <FlipCard image={img} />
        </Grid.Column>
      ))}
    </Grid>
  )
}

function CardContainer(props){
  return(
    createGrid(3, pokemon)
  )
}

export default CardContainer
