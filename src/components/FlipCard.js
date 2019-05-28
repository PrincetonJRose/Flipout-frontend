import React, { Component } from 'react'
import { Container, Image } from 'semantic-ui-react'
import ReactCardFlip from 'react-card-flip'

export default class FlipCard extends Component {
  constructor() {
    super()
  }

  handleClick =(e)=> {
    e.preventDefault()
    if (this.props.card.isFlipped === false && this.props.turnOver < 2) {
    this.props.flipCard(this.props.card)
    }
  }

  render () {
    return (
      <Container>
        <div className="flip-card">
          <ReactCardFlip isFlipped={this.props.card.isFlipped} flipDirection="horizontal">
            <div className="flip-card-front" onClick={this.handleClick} key="front">
              <Image src={this.props.cardBack} size='small' />
            </div>
            <div className="flip-card-back" onClick={this.handleClick} key="back">
              <Image src={this.props.card.img_url} wrapped />
            </div>
          </ReactCardFlip>
        </div>
      </Container>
    )
  }
}
