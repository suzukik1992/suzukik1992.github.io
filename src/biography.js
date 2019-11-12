import React from 'react';
import { myColor } from './style';

const biographyStyle = {

    float: 'right',
    position: 'absolute',
    top: "15vw",
    right: "1vw",
    width: "32vw",

};

const biographyTextStyle = {

    fontSize: "3.5vw",
    fontFamily: 'Montserrat, sans-serif',
    textAlign: 'left',
    lineHeight: '1.35',
    color: myColor.orange

};

const biographyTextSpanStyle = {
    backgroundColor: myColor.backgroundWhite
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