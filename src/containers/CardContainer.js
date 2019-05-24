import React from 'react';
import FlipCard from '../components/FlipCard'
import {Grid} from 'semantic-ui-react'

function createGrid(numColumns, images){
  return(
    <Grid container columns={numColumns}>
      {images.map(img=>(
        <Grid.Column>
          <FlipCard image={img} />
        </Grid.Column>
      ))}
    </Grid>
  )
}

function CardContainer(props){
  return(
    createGrid(8, props.images)
  )
}

export default CardContainer
