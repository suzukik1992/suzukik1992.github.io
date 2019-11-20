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
    myColor,
    maxWindowWidth,
    workCommonFactor
} from './style';
import cristalWorldImg from './media/cristalWorld.jpg';
import cristalWorldWork1Img from './media/cristalWorld_work_1.jpg';
import cristalWorldWork2Img from './media/cristalWorld_work_2.jpg';
import cristalWorldWork3Img from './media/cristalWorld_work_3.jpg';

export class CristalWorld extends React.Component {

    
    render() {

        let windowWidth = this.props.windowWidth;
        let titleFontSizeRate = 18;
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
                <img src={cristalWorldImg} style={workMainImgStyle}></img>
                <p style={{...workTitleStyle, fontSize:titleFontSize}}>Wander through the Crystal World</p>
                <p style={{...workBiographyStyle, fontSize:bioFontSize, paddingBottom:bioPaddingBottom}}>2018/06, Sound Programer, MaxMsp</p>
                <p style={{...workIntroductionStyle, fontSize:introFontSize, paddingBottom:introPaddingBottom}}>Developed 24.1ch surrund system and interactive system.</p>
                <blockquote style={{...workBlockquoteStyle, borderLeft:quoteBorderLeft}}>
                    <p style={{...workQuoteStyle, fontSize:quoteFontSize}}>This interactive installation artwork uses an accumulation of light points to create a sculptural body, similar to the way distinct dots of color form an image in a pointillist painting. The accumulation of lights in three-dimensional space form an expression of a world inside the Crystal World.</p>
                    <p style={{...workQuoteStyle, fontSize:quoteFontSize}}>Back when kanji (hieroglyphic characters) were carved into the shell of a turtle, the bone of a cow or deer, or cast in a piece of bronze ware, each character contained an entire world within it. Here, a Crystal World is created when a person summons the worlds contained in the characters up, through their smartphone. Each summoned world has an affect on the world of other visitors', and is influenced by the people in the installation. </p>
                    <p style={{...workQuoteStyle, fontSize:quoteFontSize}}>Butterflies drawn and created by visitors at other teamLab Borderless locations, or through other works of art, can make their way into this world, transformed into 3D creations through points of light.</p>
                    <p style={{...workQuoteStyle, fontSize:quoteFontSize}}>Due to visitor interaction this Crystal World is in perpetual change, the space is reborn moment by moment.</p>
                    <a href="https://www.teamlab.art/w/crystalworld" style={{...workQuoteLinkStyle, fontSize:quoteFontSize}}>https://www.teamlab.art/w/crystalworld</a>
                </blockquote>
                <div style={{...workYoutubeWrapStyle, top:youtubeTop}}>
                    <iframe style={workYoutubeStyle} width="560" height="315" src="https://www.youtube.com/embed/htGsCscBRIk" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <img src={cristalWorldWork1Img} style={{...workMainImgStyle, top:afterYoutubeImgTop}}></img>
                <img src={cristalWorldWork2Img} style={{...workMainImgStyle, top:afterYoutubeImg2Top}}></img>
                <img src={cristalWorldWork3Img} style={{...workMainImgStyle, top:afterYoutubeImg3Top}}></img>
            </div>
        );
    }
}