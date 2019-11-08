import React from 'react';
import { myColor } from './style';

const biographyStyle = {

    float: 'right',
    position: 'relative',
    top: "17.5vw",
    right: "0.5vw",
    width: "32vw",

};

const biographyTextStyle = {

    fontSize: "3.7vw",
    fontWeight: 'bold',
    fontFamily: 'Montserrat, sans-serif',
    textAlign: 'left',
    lineHeight: '1.35',
    color: myColor.orange

};

const biographyTextSpanStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.4)'
}

export class Biography extends React.Component {
    render() {
        return (
            <div style={biographyStyle}>
                <p style={biographyTextStyle}>
                    <span style={biographyTextSpanStyle}>Interested in sound design and the process, UI/UX, interactive systems, DSP, and synthesizers.</span>
                </p>
            </div>
        );
    }
}