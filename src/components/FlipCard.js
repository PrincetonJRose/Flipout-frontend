import React from 'react';
import {Card, Image} from 'semantic-ui-react';

function FlipCard(props){
  return(
    <Card>
      <Image src={props.image} />
    </Card>
  )
}

export default FlipCard
