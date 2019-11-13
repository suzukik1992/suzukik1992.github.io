import React from 'react';
import { 
        workMainImgStyle,
        workSubImgStyle,
        workTitleStyle, 
        workBiographyStyle, 
        workIntroductionStyle,
        workLinkStyle, 
        workYoutubeStyle,
        workYoutubeWrapStyle,
        workBlockquoteStyle,
        workQuoteStyle,
        workQuoteLinkStyle,
        workMainDivStyle
    } from '../style';
import ballNagoyaImg from '../media/works/ball_nagoya.jpg';
import ballNagoyaWork1Img from '../media/works/ball_nagoya_work_1.jpg';

export class BallNagoya extends React.Component {

    render() {
        return(
            <div style={workMainDivStyle}>
                <img src={ballNagoyaImg} style={workMainImgStyle}></img>
                <p style={{...workTitleStyle, fontSize:"3.8vw"}}>Floating, Resonating Spheres - Nagoya Castle</p>
                <p style={workBiographyStyle}>2017/12, Sound Programer, MaxMsp, Pure Data, Raspberry Pi</p>
                <p style={workIntroductionStyle}>Developed the surround system that can handle a space of several hundred meters using multiple Raspberry Pis.</p>
                <blockquote style={{...workBlockquoteStyle, height:"20.7vw"}}>
                    <p style={workQuoteStyle}>The spheres of light floating in Nagoya Castle, are autonomous, the light shines brightly and then disappears, as if it is slowly breathing.</p>
                    <p style={workQuoteStyle}>When the spheres of light are touched by a person or receive an impact, the color of their light changes, and they emit a unique color tone. The color then resonates out to the spheres around them. The resonating light is transmitted to the next spheres one after another, spreading the color tone in the same way continuously.</p>
                    <a href="https://www.teamlab.art/ew/nagoya-castle/" style={workQuoteLinkStyle}>https://www.teamlab.art/ew/nagoya-castle/</a>
                </blockquote>
                <img src={ballNagoyaWork1Img} style={{...workSubImgStyle, top:"10vw"}}></img>
            </div>
        );
    }
}