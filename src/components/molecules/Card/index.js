import React, { Component } from 'react';
import style from './style.scss';
import ProfilePicture from '../../atoms/ProfilePicture';


class Card extends Component {
    render() {
        return (
            <div className={style.card}>
                <div className={style.picture}>
                    <ProfilePicture />
                </div>
                <div>
                    TICKET NAME
                </div>
            </div>
        );
    }
}

export default Card;
