import React from 'react';
import Menu from './components/Menu'
import Stats from './components/Stats'
import CardContainer from './containers/CardContainer'
import './App.css';

class App extends React.Component {
  constructor(){
    super()

    this.state = {}
  }

  render(){
    return (
      <div className="App">
        <header className="App-header"></header>
        <Menu />
        <CardContainer />
      </div>
    );
  }

}

export default App;
