import React, { Component } from 'react';
import style from './style.scss';
import PropTypes from 'prop-types';

import Card from '../Card';

class Swimlane extends Component {
    constructor(props) {
        super(props);

        this.onDrop = this.onDrop.bind(this);
        this.onDragOver = this.onDragOver.bind(this);
    }

    onDrop(event) {
        event.preventDefault();
        const cardId = event.dataTransfer.getData("text");
        console.log(`Swimlane '${this.props.title}' saw drop event:\t`, event, `\tfor card: ${cardId}`);
        this.props.onCardSwimlaneChange(cardId, this.props.title);
    }

    onDragOver(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div 
                className={style.lane}
                onDragOver={this.onDragOver}
                onDrop={this.onDrop}
            >
                <div className={style.laneTitleBox}>
                    {this.props.title}
                    <span className={style.laneCount}>
                        ({this.props.cards.length})
                    </span>
                </div>
                {this.props.cards.map(card => <Card key={ card.id } {...card} />)}
            </div>
        );
    }
}

Swimlane.propTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.arrayOf(PropTypes.shape(Card.propTypes)).isRequired,
    onCardSwimlaneChange: PropTypes.func.isRequired
}

export default Swimlane;
