import React from 'react';
import logo from '../logo.svg';
import '../css/Introduction.css';
import rocketBackground from '../assets/images/rocketBackground.svg';

const IntroductionComponent = () => {
    return (
        <>
            <div className="Home-introductionSection">
                <img src={rocketBackground} className="Home-rocketBackground" alt="rocketBackground"></img>
                <div className="Home-introductionTitle">
                    Hi! I'm Steve
                </div>
                <div className="Home-introductionDescription">
                    A passionate frontend developer with a BSc Software Engineering certificate
                </div>
            </div>
        </>
    );
}

export default IntroductionComponent;