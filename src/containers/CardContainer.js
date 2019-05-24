import React from 'react';
import FlipCard from '../components/FlipCard'
import {Grid} from 'semantic-ui-react'

function CardContainer(props){
  return(
    <Grid container columns={props.numColumns}>
      {props.pokemon.map( pm =>(
        <Grid.Column>
          <FlipCard pokemon={pm} flipCard={props.flipCard} checkTurnOver={props.checkTurnOver} turnOver={props.turnOver}/>
        </Grid.Column>
      ))}
    </Grid>
  )
}

export default CardContainer
