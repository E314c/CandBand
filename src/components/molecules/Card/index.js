import React, { Component } from 'react';
import style from './style.scss';
import PropTypes from 'prop-types';

import ProfilePicture from '../../atoms/ProfilePicture';
import RatingWidget from '../../atoms/RatingWidget';


class Card extends Component {
    constructor(props) {
        super(props);
        this.onDragStart = this.onDragStart.bind(this);
    }

    onDragStart(event){
        console.log('Drag Event Started:\t', event, ' for card:', this.props.id);
        event.dataTransfer.setData("text/plain", this.props.id);
    }

    render() {
        return (
            <div 
                className={style.card}
                draggable
                onDragStart={this.onDragStart}
                id={ this.props.id }
            >
                <div className={style.picture}>
                    <ProfilePicture />
                </div>
                <div>
                    <div className= {style.topbar}>
                        <div>
                            { this.props.name }
                        </div>  
                        <div>
                            <RatingWidget rating={ this.props.rating }/>
                        </div>  
                    </div>
                    <div className={style.subtitle}>
                        { this.props.subtitle }
                    </div>
                </div>
            </div>
        );
    }
}

Card.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    subtitle: PropTypes.string,
}

export default Card; 