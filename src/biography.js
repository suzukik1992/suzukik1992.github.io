import React from 'react';
import { myColor, maxWindowWidth } from './style';

const biographyStyle = {

    position: 'absolute',
    right: '1%',
    bottom: '-3%',

}

const biographyTextStyle = {

    fontFamily: 'Montserrat, sans-serif',
    textAlign: 'left',
    lineHeight: '1.4',
    color: myColor.orange

}

const biographyTextSpanStyle = {
    backgroundColor: myColor.backgroundWhite
}

export class Biography extends React.Component {
    render() {

        let windowWidth = this.props.windowWidth;
        let bioFontSize = 100/27 + "vw";
        let bioWidth = "33.333vw";

        // over maxWidth
        if(windowWidth === maxWindowWidth) {
            bioFontSize = windowWidth/27;
            bioWidth = windowWidth/3;
        } 


        return (
            <div style={{...biographyStyle, width:bioWidth}}>
                <p style={{...biographyTextStyle, fontSize:bioFontSize}}>
                    <span style={biographyTextSpanStyle}>Interested in sound design and the process, UI/UX, interactive systems, DSP, and synthesizers.</span>
                </p>
            </div>
        );
    }
}