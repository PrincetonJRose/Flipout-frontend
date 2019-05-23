import React from 'react';
import Menu from './components/Menu'
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
        <Menu />
        <CardContainer />
      </div>
    );
  }

}

export default App;
