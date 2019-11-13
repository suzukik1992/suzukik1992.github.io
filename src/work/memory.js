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
import memoryImg from '../media/works/memory.jpg';

const divStyle = {
    width: "100vw"
}

export class Memory extends React.Component {

    render() {
        return(
            <div style={divStyle}>
                <img src={memoryImg} style={workMainImgStyle}></img>
                <p style={{...workTitleStyle, fontSize:"6vw"}}>Memory of Topography</p>
                <p style={workBiographyStyle}>2018/06, Sound Programer, MaxMsp</p>
                <p style={workIntroductionStyle}>Developed the 24ch surrund system using MaxMsp.</p>
                <blockquote style={{...workBlockquoteStyle}}>
                    <p style={workQuoteStyle}>This artwork installation depicts a rural mountain landscape of varying elevations. The scenery instills in the viewer a feeling of eternal permanence, however with the flow of real time the scenery is continuously changing. In the spring, the rice fields are still small and lush. In summer, they begin to mature, and in fall, they turn a golden color. And with the flow of time, the insects and flowers that make an appearance also change. The movement of insects is influenced by the movement and actions of people. And as people move around, the flow of air changes and blows the rice plants or scatters flower petals in different directions.</p>
                    <p style={workQuoteStyle}>The overall appearance of this work will hardly change with each year. However, as in nature, the scenery is actually changing, and you will never see the same scenery twice. This moment will never be repeated and can never be seen again. Seemingly unchanging landscapes go on year after year for eternity.</p>
                    <p style={workQuoteStyle}>The work and the canvas that mediates it are separated - the canvas has become transformative. The visual illusion produced by continuous dynamic change causes the viewer to become bodily immersed in the work, and the border between the viewer and artwork dissolves. As the unified world changes, viewers may feel a sense of melting into the world, becoming one with it and with each other.</p>
                    <a href="https://www.teamlab.art/w/topography/" style={workQuoteLinkStyle}>https://www.teamlab.art/w/topography/</a>
                </blockquote>
                <div style={{...workYoutubeWrapStyle}}>
                    <iframe style={workYoutubeStyle} width="560" height="315" src="https://www.youtube.com/embed/qwOgblaqd-w" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        );
    }
}