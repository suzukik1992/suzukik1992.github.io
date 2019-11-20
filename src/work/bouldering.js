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
} from '../style';
import boulderingImg from '../media/works/bouldering.jpg';
import boulderingWork1Img from '../media/works/bouldering_work_1.jpg';
import boulderingWork2Img from '../media/works/bouldering_work_2.jpg';

export class Bouldering extends React.Component {

    render() {

        let windowWidth = this.props.windowWidth;
        let titleFontSizeRate = 22;
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
                <img src={boulderingImg} style={workMainImgStyle}></img>
                <p style={{...workTitleStyle, fontSize:titleFontSize}}>Light Forest Three-dimensional Bouldering</p>
                <p style={{...workBiographyStyle, fontSize:bioFontSize, paddingBottom:bioPaddingBottom}}>2018/06, Sound Programer, MaxMsp</p>
                <p style={{...workIntroductionStyle, fontSize:introFontSize, paddingBottom:introPaddingBottom}}>Developed 16.1ch surrund system and interactive system.</p>
                <blockquote style={{...workBlockquoteStyle, borderLeft:quoteBorderLeft}}>
                    <p style={{...workQuoteStyle, fontSize:quoteFontSize}}>Three-dimensional Bouldering was developed by teamLab, it features sparkling gemstones distributed three dimensionally in a space which people climb to move through the space. </p>
                    <p style={{...workQuoteStyle, fontSize:quoteFontSize}}>This is a space developed by teamLab that features sparkling gemstones distributed three dimensionally. It’s called Three-dimensional Light Bouldering because the gemstones that have been distributed in three dimensions are climbed like footholds in bouldering. The sparkling gemstones form the boulders and visitors have to use both hands and feet on each plane to navigate their way around the space three dimensionally.</p>
                    <p style={{...workQuoteStyle, fontSize:quoteFontSize}}>Visitors wear a badge that glows a specific color and then make their way through the course stepping on gemstones of that color. If you proceed using only your color gemstones, then the badge will signal to neighboring boulders to make them glow the same color and a tone specifically. Your badge and the surrounding boulders will continuously react to each other. So the more you are able to navigate using just your own color boulders, the wider your color light range will be.</p>
                    <p style={{...workQuoteStyle, fontSize:quoteFontSize}}>This installation is constructed in real time via a computer program. It isn’t just a replay of a recorded video. Previous patterns are never recreated and the colors are continuously changing. Here you will find art that you will never see twice.</p>
                    <a href="https://www.teamlab.art/w/bouldering/" style={{...workQuoteLinkStyle, fontSize:quoteFontSize}}>https://www.teamlab.art/w/bouldering/</a>
                </blockquote>
                <div style={{...workYoutubeWrapStyle, top:youtubeTop}}>
                    <iframe style={workYoutubeStyle} width="560" height="315" src="https://www.youtube.com/embed/XY2cvCsmOOc" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <img src={boulderingWork2Img} style={{...workMainImgStyle, top:afterYoutubeImgTop}}></img>
            </div>
        );
    }
}