import React from 'react';
import { 
        workMainImgStyle,
        workTitleStyle, 
        workBiographyStyle, 
        workIntroductionStyle,
        workLinkStyle, 
        workYoutubeStyle,
        workYoutubeWrapStyle,
        workBlockquoteStyle,
        workQuoteStyle,
        workQuoteLinkStyle
    } from '../style';
import evessaImg from '../media/works/evessa.png';

const divStyle = {
    width: "100vw",

}

export class Evessa extends React.Component {

    render() {
        return(
            <div style={divStyle}>
                <img src={evessaImg} style={workMainImgStyle}></img>
                <p style={{...workTitleStyle, fontSize:"6vw"}}>Evessa × teamLab</p>
                <p style={workBiographyStyle}>2017/09, Programer, Ableton Live, Max for Live, Resolume Arena</p>
                <p style={workIntroductionStyle}>Developed a pipeline that flexibly connects Resolume Arena and Ableton Live using Max for Live.</p>
                <a href="https://www.team-lab.com/evessapark2018" style={workLinkStyle}>Official Website</a>
                <div style={workYoutubeWrapStyle}>
                    <iframe style={workYoutubeStyle} width="560" height="315" src="https://www.youtube.com/embed/VXZ66UE8SIE" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        );
    }
}