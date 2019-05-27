import React from 'react';
import FlipCard from '../components/FlipCard'
import {Grid} from 'semantic-ui-react'

function CardContainer(props){
  return(
    <Grid container columns={props.numColumns}>
      {
        props.gameDeck.map(card => (
          <Grid.Column>
            <FlipCard card={card} flipCard={props.flipCard} turnOver={props.turnOver}/>
          </Grid.Column>
        ))
      }
    </Grid>
  )
}

export default CardContainer
