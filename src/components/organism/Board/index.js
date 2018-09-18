import React, { Component } from 'react';
import style from './style.scss';
import PropTypes from 'prop-types';

import Swimlane from '../../molecules/Swimlane';

class Board extends Component {
    render() {
        console.log('Print props: ', this.props);
        return (
            <div className={style.board}>
                {
                    this.props.swimlanes.map(x => <Swimlane key={x} title={x} cards={[]}/>)
                }
            </div>
        );
    }
}

Board.propTypes = {
    swimlanes: PropTypes.arrayOf(PropTypes.string).isRequired,
    cards: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Board;
