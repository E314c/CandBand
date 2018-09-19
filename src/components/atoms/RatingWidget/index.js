import React, { Component } from 'react';
import style from './style.scss';
import PropTypes from 'prop-types';

class RatingWidget extends Component {
    render() {
        return (
            <div className={style.ratingDiv}>
                <svg width="15" height="15" >
                    <circle cx="5" cy="5" r="5"/>
                </svg>
                <span>{this.props.rating}</span>
            </div>
        );
    }
}

RatingWidget.propTypes = {
    rating: PropTypes.number.isRequired
}


export default RatingWidget;
