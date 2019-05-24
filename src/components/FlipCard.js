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
        <div className="flip-card">
          <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
            <div className="flip-card-front" onClick={this.handleClick} key="front">
              <Image src='../images/darkPokeBall.png' size='small' />
            </div>
            <div className="flip-card-back" onClick={this.handleClick} key="back">
              <Image src={this.props.pokemon.sprites.front} wrapped />
            </div>
          </ReactCardFlip>
        </div>
      </Container>
    )
  }
}
