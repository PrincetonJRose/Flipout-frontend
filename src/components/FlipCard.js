import React, { Component } from 'react'
import {Container, Image} from 'semantic-ui-react'
import ReactCardFlip from 'react-card-flip'

export default class FlipCard extends Component {
  constructor() {
    super()
    this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }
  
  render () {
    return (
      <Container>
        <div class="flip-card">
          {/* <div class="flip-card-inner"> */}
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                <div class="flip-card-front" onClick={this.handleClick} key="front">
                  <Image src='../images/darkPokeBall.png' size='small' />
                </div>
                <div class="flip-card-back" onClick={this.handleClick} key="back">
                  <Image src={this.props.image} wrapped />
                </div>
            </ReactCardFlip>
          {/* </div> */}
        </div>
      </Container>
    )
  }
}
