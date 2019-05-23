import React from 'react';
import {Card, Image, Reveal} from 'semantic-ui-react';

function FlipCard(props){
  return(
    <Card link>
      <Image src={props.image} wrapped />
    </Card>
  )
}

export default FlipCard
