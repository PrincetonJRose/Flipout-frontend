import React, { Component } from 'react'
import {Container, Image} from 'semantic-ui-react'
import ReactCardFlip from 'react-card-flip'

export default class FlipCard extends Component {
  constructor() {
    super()
  }

  handleClick =(e)=> {
    e.preventDefault()
    if (this.props.pokemon.isFlipped === false && this.props.turnOver < 2) {
    this.props.flipCard(this.props.pokemon)
    }
  }

  render () {
    return (
      <Container>
        <div class="flip-card">
          <ReactCardFlip isFlipped={this.props.pokemon.isFlipped} flipDirection="horizontal">
            <div class="flip-card-front" onClick={this.handleClick} key="front">
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
