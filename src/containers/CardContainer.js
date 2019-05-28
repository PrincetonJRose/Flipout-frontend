import React, { Component } from 'react';
import FlipCard from '../components/FlipCard'
import {Grid} from 'semantic-ui-react'

export default class CardContainer extends Component {
  constructor() {
    super()
    this.state = {
      columns: 0,
      rows: 0,
    }
  }

  componentWillReceiveProps() {
    this.setState({
      columns: this.props.numColumns,
      rows: this.props.numRows,
    })
  }

  render () {
    if (this.props) {
      return(
        <Grid container columns={this.state.columns}>
          {
            this.props.gameDeck.map(card => (
              <Grid.Column>
                <FlipCard card={card} flipCard={this.props.flipCard} turnOver={this.props.turnOver} cardBack={this.props.cardBack}/>
              </Grid.Column>
            ))
          }
        </Grid>
      )
    } else {
      return null
    }
  }
}


