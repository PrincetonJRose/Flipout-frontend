import React from 'react';
import FlipCard from '../components/FlipCard'
import {Grid} from 'semantic-ui-react'

function CardContainer(props){
  return(
    <Grid container columns={props.numColumns}>
      {
        props.pokemon.map(pokemon => (
          <Grid.Column>
            <FlipCard pokemon={pokemon} flipCard={props.flipCard} turnOver={props.turnOver}/>
          </Grid.Column>
        ))
      }
    </Grid>
  )
}

export default CardContainer
