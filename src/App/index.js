import React, { Component } from 'react';
import style from './App.scss';

import Board from '../components/organism/Board';

import fakeApiCall from './fakeApiCall';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      board: fakeApiCall()
    };
  }
  render() {
    return (
      <div className={style.App}>
        <h1 style={{fontSize: '2rem', borderBottom: 'thin black solid', marginBottom: '20px', paddingBottom: '10px'}}>E314c's C&amp;B&amp; board</h1>
        <Board 
          swimlanes={this.state.board.swimlanes}
          cards={this.state.board.cards}
        />
      </div>
    );
  }
}

export default App;
