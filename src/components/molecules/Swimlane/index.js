import React, { Component } from 'react';
import style from './style.scss';
import PropTypes from 'prop-types';

import Card from '../Card';

class Swimlane extends Component {
    render() {
        return (
            <div className={style.lane}>
                <div>{this.props.title}</div>
                <Card/>
                <Card/>
            </div>
        );
    }
}

Swimlane.propTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Swimlane;
