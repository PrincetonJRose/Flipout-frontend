import React from 'react';
import FlipCard from '../components/FlipCard'
import {Grid} from 'semantic-ui-react'

function createGrid(numColumns, pokemon, turnOver, checkTurnOver){
  return(
    <Grid container columns={numColumns}>
      {pokemon.map( pm =>(
        <Grid.Column>
          <FlipCard pokemon={pm} turnOver={turnOver} checkTurnOver={checkTurnOver}/>
        </Grid.Column>
      ))}
    </Grid>
  )
}

function CardContainer(props){
  return(
    createGrid(8, props.pokemon, props.turnOver, props.checkTurnOver)
  )
}

export default CardContainer
