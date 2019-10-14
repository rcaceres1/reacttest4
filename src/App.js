import React, { Component } from 'react';
import './App.css';
import CircleSelector from './components/CircleSelector';
import Circles from './components/Circles';

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedCircle: 1
    };
  }

  handleChangeCircle = (circleNumber) => {
    this.setState({selectedCircle: circleNumber});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector
            selectedCircle={this.state.selectedCircle}
            handleChangeCircle={this.handleChangeCircle}
          />
          <Circles selectedCircle={this.state.selectedCircle} />
        </main>
      </div>
    );
  }
}

export default App;