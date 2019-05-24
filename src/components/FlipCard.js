import React from 'react';
import {Container, Image} from 'semantic-ui-react';

function FlipCard(props){
  return(
    <Container>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <Image src='../images/lightPokeBall.png' size='small' />
          </div>
          <div class="flip-card-back">
            <Image src={props.image} wrapped />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default FlipCard
