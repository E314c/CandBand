import React, { Component } from 'react';
import style from './style.scss';
import PropTypes from 'prop-types';

import Swimlane from '../../molecules/Swimlane';

class Board extends Component {

    render() {
        const { swimlanes, cards } = this.props;

        const swimlanesWithCards = swimlanes.reduce((acc, laneTitle) => {
            acc[laneTitle] = cards.filter(c => c.status === laneTitle);
            return acc;
        }, {});

        return (
            <div className={style.board}>
                {
                    Object.keys(swimlanesWithCards).map(x => <Swimlane 
                        key={x} 
                        title={x} 
                        cards={swimlanesWithCards[x]} 
                        onCardSwimlaneChange={this.props.onCardSwimlaneChange}
                        />)
                }
            </div>
        );
    }
}

Board.propTypes = {
    swimlanes: PropTypes.arrayOf(PropTypes.string).isRequired,
    cards: PropTypes.arrayOf(PropTypes.object).isRequired,
    onCardSwimlaneChange: PropTypes.func.isRequired
}

export default Board;
