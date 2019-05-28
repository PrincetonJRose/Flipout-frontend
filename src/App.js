import React from 'react';
import Nav from './components/Nav'
import CardContainer from './containers/CardContainer'
import './App.css'
const localURL = `http://localhost:3000/`

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      themes: [],
      turnOver: 0,
      numColumns: 4,
      numRows: 4,
      cardTotal: 16,
      compare: [],
      gameDeck: [],
      users: [],
      theme: 'pokemon',
      cardBacks: ["../images/darkPokeBall.png", "../images/lightPokeBall.png"],
      misses: 0,
      combo: 0,
      turns: 0,
    }
  }

  componentDidMount() {
    fetch(localURL + `themes`)
    .then(res => res.json())
    .then(themeData => {
      let addFlipped = themeData.map( theme => {
        return {...theme, isFlipped: false}
      })
      let addMatched = addFlipped.map( theme => {
        return {...theme, isMatched: false}
      })
      this.setState({
        themes: addMatched,
      })
    })
    fetch(localURL + `users`)
    .then(res => res.json())
    .then(userData => this.setState({ users: userData }))
  }
  
  handleNewGame = (size) => {
    if (size === 'sm') {
      this.setState({
        numColumns: 4,
        numRows: 4,
        cardTotal: 16,
      })
    } else if (size === 'md') {
      this.setState({
        numColumns: 5,
        numRows: 4,
        cardTotal: 20,
      })
    } else {
      this.setState({
        numColumns: 6,
        numRows: 4,
        cardTotal: 24,
      })
    }
    fetch(localURL + `themes`)
    .then(res => res.json())
    .then(themeData => {
      this.generateBoard()
    })
  }


  checkTurnOver =()=> {
    if (this.state.turnOver < 2) {
      if (this.state.turnOver + 1 === 2) {
        this.setState({ turnOver: this.state.turnOver + 1 })
        setTimeout( this.resetTurnOver, 1100 )
      }
      this.setState({
        turnOver: this.state.turnOver + 1
      })
    }
    if (this.state.turnOver === 2) {
      setTimeout( this.resetTurnOver, 1100 )
    }
  }

  resetTurnOver =()=> {
    this.compareMatch()
    let flipAll = this.state.gameDeck.map( card => {
      if (card.isMatched) {
        card.isFlipped = true
        return card
      } else {
        card.isFlipped = false
        return card
      }
    })
    this.setState({
      turnOver: 0,
      gameDeck: flipAll
    })
  }

  flipCard =(cardFlip)=> {
    let flip = this.state.gameDeck.map( card => {
      if (card.index === cardFlip.index) {
        card.isFlipped = true
        return card
      } else {
        return card
      }
    })
    this.setState({ gameDeck: flip })
    if (this.state.compare.length < 2) {
      let compare = this.state.compare
      compare.push(cardFlip)
      this.setState({
        compare: compare
      })
    }
    this.checkTurnOver()
  }

  compareMatch =()=> {
    let compare = this.state.compare
    if (compare.length === 2 && compare[0].id === compare[1].id) {
      let match = this.state.gameDeck.map( card => {
        if (card.index === compare[0].index || card.index === compare[1].index) {
          card.isMatched = true
          return card
        } else {
          return card
        }
      })
      this.setState({
        gameDeck: match,
        compare: [],
        turns: this.state.turns + 1,
      })
    } else if (compare.length === 2 && compare[0].id !== compare[1].id) {
      this.setState({
        compare: [],
        misses: this.state.misses + 1,
        turns: this.state.turns + 1,
      })
    }
    let count = 0
    this.state.gameDeck.map( card => {
      if (card.isMatched) {
        count += 1
      }
    })
    if (count === this.state.gameDeck.length) {
      // this.gameWin()
      setTimeout(this.gameReset(), 8000)
    }
  }

  gameReset =()=> {
    let reset = this.state.themes.map( card => {
      card.isFlipped = false
      card.isMatched = false
      return card
    })
    this.setState({
      themes: reset,
      gameDeck: [],
      misses: 0,
      combo: 0,
      turns: 0,
    })
    this.generateBoard()
  }

  generateBoard =()=> {
    let randomSelection = []
    for (let i = 0; i < this.state.cardTotal; i++) {
      randomSelection.push(false)
    }
    let themeChosen = this.state.themes.filter( theme => {
      if (theme.name === this.state.theme)
        return true
    })
    for (let i = 0; i < (this.state.cardTotal/2); i++) {
      let randomIndex = Math.round(Math.random() * themeChosen.length)
      let randomPosition 
      while (true) {
        randomPosition = Math.round(Math.random() * (this.state.cardTotal - 1))
        if (randomSelection[randomPosition] === false) {
          randomSelection.splice(randomPosition, 1, themeChosen[randomIndex])
          break
        }
      }
      while (true) {
        randomPosition = Math.round(Math.random() * (this.state.cardTotal - 1))
        if (randomSelection[randomPosition] === false) {
          randomSelection.splice(randomPosition, 1, themeChosen[randomIndex])
          break
        }
      }
    }
    this.setGameDeck(randomSelection)
  }

  setGameDeck =(randomSelection)=> {
    let indexPosition = -1
    let addIndex = randomSelection.map( card => {
      indexPosition += 1
      return {...card, index: indexPosition}
    })
    this.setState({ gameDeck: addIndex })
    this.showAllCards()
  }

  showAllCards =()=> {
    let showAll = this.state.gameDeck.map( card => {
      card.isFlipped = true
      return card
    })
    this.setState({ gameDeck: showAll })
    setTimeout( this.hideAllCards(), 8000 )
  }

  hideAllCards =()=> {
    let hideAll = this.state.gameDeck.map( card => {
      card.isFlipped = false
      return card
    })
    this.setState({ gameDeck: hideAll })
  }

  render() {
    if (this.state.gameDeck) {
      return (
        <div className="App">
          <Nav newGame={this.handleNewGame} cardBacks={this.state.cardBacks}/>
          <br></br>
          <CardContainer gameDeck={this.state.gameDeck} flipCard={this.flipCard} turnOver={this.state.turnOver} numColumns={this.state.numColumns} numRows={this.state.numRows} cardBacks={this.cardBacks}/>
        </div>
      )
    } else {
      return null
    }
  }
}
