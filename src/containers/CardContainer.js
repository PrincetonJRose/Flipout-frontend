import React from 'react';
import FlipCard from '../components/FlipCard'
import {Grid} from 'semantic-ui-react'

function createGrid(numColumns, pokemon){
  return(
    <Grid container columns={numColumns}>
      {pokemon.map( pm =>(
        <Grid.Column>
          <FlipCard pokemon={pm} />
        </Grid.Column>
      ))}
    </Grid>
  )
}

function CardContainer(props){
  return(
    createGrid(8, props.pokemon)
  )
}

export default CardContainer
