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

    this.onCardSwimlaneChange = this.onCardSwimlaneChange.bind(this);
  }

  onCardSwimlaneChange(cardId, newSwimlane) {
    //Check swimlane is valid
    if(!this.state.board.swimlanes.includes(newSwimlane)){
      console.error(`Invalid swimlane: ${newSwimlane}`);
      return;
    }
    // Find card index
    const cardIndex = this.state.board.cards.findIndex(c => c.id === cardId);

    if(cardIndex === -1) {
      console.error(`Invalid CardId: ${cardId}`);
      return;
    } else {
      const newState = JSON.parse(JSON.stringify(this.state));
      newState.board.cards[cardIndex].status = newSwimlane;
      this.setState(newState);
    }
  }

  render() {
    return (
      <div className={style.App}>
        <h1 style={{fontSize: '2rem', borderBottom: 'thin black solid', marginBottom: '20px', paddingBottom: '10px'}}>E314c's C&amp;B&amp; board</h1>
        <Board 
          swimlanes={this.state.board.swimlanes}
          cards={this.state.board.cards}
          onCardSwimlaneChange={this.onCardSwimlaneChange}
        />
      </div>
    );
  }
}

export default App;
