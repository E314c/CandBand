import React, { Component } from 'react';
import style from './style.scss';
import picture from './examplePic.jpg';

class ProfilePicture extends Component {
    render() {
        return (
            <div className={style.pictureBox}>
                <img src={ picture } className={style.picture} alt={this.props.profileName} />
            </div>
        );
    }
}

export default ProfilePicture;
