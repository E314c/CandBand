import React, { Component } from 'react';
import style from './style.scss';
import PropTypes from 'prop-types';

class RatingWidget extends Component {
    render() {
        return (
            <div className={style.ratingDiv}>
                <svg 
                    width="15px" 
                    height="15px"
                    viewBox="0 0 3.9687499 3.9687501"
                >
                    <g
                        transform="translate(0,-293.03123)"
                        id="layer1">
                        <path
                            id="path815"
                            d="m 1.967174,293.22611 0.7333664,0.95083 1.138984,0.38025 -0.6776622,0.99129 -0.00968,1.20076 -1.1521837,-0.33817 -1.14497066,0.36184 -0.0344222,-1.20029 -0.69794562,-0.97713 1.13090788,-0.40365 z"
                            />
                    </g>
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
