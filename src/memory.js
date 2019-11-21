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
    workMainDivStyle,
    maxWindowWidth,
    myColor,
    workCommonFactor
} from './style';
import memoryImg from './media/memory.jpg';
import memoryWork1Img from './media/memory_work_1.jpg';
import memoryWork2Img from './media/memory_work_2.jpg';
import memoryWork3Img from './media/memory_work_3.jpg';

export class Memory extends React.Component {

    render() {

        let windowWidth = this.props.windowWidth;
        let titleFontSizeRate = 15;
        let titleFontSize = 100/titleFontSizeRate + "vw";

        let bioFontSize = 100/workCommonFactor.bioFontSizeRate + "vw";
        let bioPaddingBottom = 100/workCommonFactor.bioPaddingBottomRate + "vw";
        let introFontSize = 100/workCommonFactor.introFontSizeRate + "vw";
        let introPaddingBottom = 100/workCommonFactor.introPaddingBottomRate + "vw";
        let youtubeTop = 100/workCommonFactor.youtubeTopRate + "vw";
        let quoteBorderThick = 100/workCommonFactor.quoteBorderThickRate + "vw";
        let quoteFontSize = 100/workCommonFactor.quoteFontSizeRate + "vw";
        let firstImgTopFromQuote = 100/workCommonFactor.firstImgTopFromQuoteRate + "vw";
        let afterYoutubeImgTop = 100/workCommonFactor.afterYoutubeImgTopRate + "vw";
        let afterYoutubeImg2Top = 100/workCommonFactor.afterYoutubeImgTop2Rate + "vw";
        let afterYoutubeImg3Top = 100/workCommonFactor.afterYoutubeImgTop3Rate + "vw";

        // over maxWidth ios
        if(windowWidth === maxWindowWidth) {
            titleFontSize = windowWidth/titleFontSizeRate + "px";
            bioFontSize = windowWidth/workCommonFactor.bioFontSizeRate + "px";
            bioPaddingBottom = windowWidth/workCommonFactor.bioPaddingBottomRate + "px";
            introFontSize = windowWidth/workCommonFactor.introFontSizeRate + "px";
            introPaddingBottom = windowWidth/workCommonFactor.introPaddingBottomRate + "px";
            youtubeTop = windowWidth/workCommonFactor.youtubeTopRate + "px";
            quoteBorderThick = windowWidth/workCommonFactor.quoteBorderThickRate + "px";
            quoteFontSize = windowWidth/workCommonFactor.quoteFontSizeRate + "px";
            firstImgTopFromQuote = windowWidth/workCommonFactor.firstImgTopFromQuoteRate + "px";
            afterYoutubeImgTop = windowWidth/workCommonFactor.afterYoutubeImgTopRate + "px";
            afterYoutubeImg2Top = windowWidth/workCommonFactor.afterYoutubeImgTop2Rate + "px";
            afterYoutubeImg3Top = windowWidth/workCommonFactor.afterYoutubeImgTop3Rate + "px";
        }

        let quoteBorderLeft = `${quoteBorderThick} solid ${myColor.whiteFade}`;

        return(
            <div style={workMainDivStyle}>
                <img src={memoryImg} style={workMainImgStyle}></img>
                <p style={{...workTitleStyle, fontSize:titleFontSize}}>Memory of Topography</p>
                <p style={{...workBiographyStyle, fontSize:bioFontSize, paddingBottom:bioPaddingBottom}}>2018/06, Sound Programer, MaxMsp</p>
                <p style={{...workIntroductionStyle, fontSize:introFontSize, paddingBottom:introPaddingBottom}}>Developed 24.1ch surrund system and interactive system.</p>
                <blockquote style={{...workBlockquoteStyle, borderLeft:quoteBorderLeft}}>
                    <p style={{...workQuoteStyle, fontSize:quoteFontSize}}>This artwork installation depicts a rural mountain landscape of varying elevations. The scenery instills in the viewer a feeling of eternal permanence, however with the flow of real time the scenery is continuously changing. In the spring, the rice fields are still small and lush. In summer, they begin to mature, and in fall, they turn a golden color. And with the flow of time, the insects and flowers that make an appearance also change. The movement of insects is influenced by the movement and actions of people. And as people move around, the flow of air changes and blows the rice plants or scatters flower petals in different directions.</p>
                    <p style={{...workQuoteStyle, fontSize:quoteFontSize}}>The overall appearance of this work will hardly change with each year. However, as in nature, the scenery is actually changing, and you will never see the same scenery twice. This moment will never be repeated and can never be seen again. Seemingly unchanging landscapes go on year after year for eternity.</p>
                    <p style={{...workQuoteStyle, fontSize:quoteFontSize}}>The work and the canvas that mediates it are separated - the canvas has become transformative. The visual illusion produced by continuous dynamic change causes the viewer to become bodily immersed in the work, and the border between the viewer and artwork dissolves. As the unified world changes, viewers may feel a sense of melting into the world, becoming one with it and with each other.</p>
                    <a href="https://www.teamlab.art/w/topography/" style={{...workQuoteLinkStyle, fontSize:quoteFontSize}}>https://www.teamlab.art/w/topography/</a>
                </blockquote>
                <div style={{...workYoutubeWrapStyle, top:youtubeTop}}>
                    <iframe style={workYoutubeStyle} width="560" height="315" src="https://www.youtube.com/embed/qwOgblaqd-w" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <img src={memoryWork1Img} style={{...workMainImgStyle, top:afterYoutubeImgTop}}></img>
                <img src={memoryWork2Img} style={{...workMainImgStyle, top:afterYoutubeImg2Top}}></img>
                <img src={memoryWork3Img} style={{...workMainImgStyle, top:afterYoutubeImg3Top}}></img>
            </div>
        );
    }
}