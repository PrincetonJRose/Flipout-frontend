import React from 'react';
import {Card, Image, Reveal} from 'semantic-ui-react';

function FlipCard(props){
  return(
    <Card link>
      <Reveal active animated='move'>
        <Reveal.Content visible>
          <Image src={props.image} wrapped/>
        </Reveal.Content>
        <Reveal.Content hidden>
          <Image src={props.image} wrapped/>
        </Reveal.Content>
      </Reveal>
    </Card>
  )
}

export default FlipCard
