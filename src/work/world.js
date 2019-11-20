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
} from '../style';
import worldImg from '../media/works/world.jpg';
import worldWork1Img from '../media/works/world_work_1.jpg';
import worldWork2Img from '../media/works/world_work_2.jpg';

export class World extends React.Component {

    render() {

        let windowWidth = this.props.windowWidth;
        let titleFontSizeRate = 27.5;
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
                <img src={worldImg} style={workMainImgStyle}></img>
                <p style={{...workTitleStyle, fontSize:titleFontSize}}>Born From the Darkness a Loving, and Beautiful World</p>
                <p style={{...workBiographyStyle, fontSize:bioFontSize, paddingBottom:bioPaddingBottom}}>2019/11, Sound Programer, MaxMsp</p>
                <p style={{...workIntroductionStyle, fontSize:introFontSize, paddingBottom:introPaddingBottom}}>Developed 32.2ch surrund system and interactive system. And also a flexible sync function has been implemented for elements coming beyond the work.</p>
                <blockquote style={{...workBlockquoteStyle, borderLeft:quoteBorderLeft}}>
                    <p style={{...workQuoteStyle, fontSize:quoteFontSize}}>When a person stands close to a character, the world that that character embodies will appear and a new world will be created. The objects that are released from the characters go on to influence one another in the new world.</p>
                    <p style={{...workQuoteStyle, fontSize:quoteFontSize}}>The work is also influenced by other works. For example, when crows fly through the characters they release the world contained within them. Additionally, the butterflies that are released by the character for butterfly, go on to fly out of the work and freely fly into and around other works. If a butterfly that has left the work is touched by a person it will die.</p>
                    <p style={{...workQuoteStyle, fontSize:quoteFontSize}}>Behind the projected world, there is a 360-degree computer-generated space. The objects that are born from the characters are placed at various positions within that space, and the physical influences and connections between the objects are calculated in real time, producing a complex and natural world. For example, if the wind blows, the objects are subjected to its physical influence. Butterflies are frightened by fire, but attracted to flowers. Just as in nature, no two moments are repeated. The passing moments of the world are never the same and new visual worlds are constantly being created.</p>
                    <p style={{...workQuoteStyle, fontSize:quoteFontSize}}>Chinese characters were first carved in turtle shells and ox or deer bones, and were engraved in bronze ware. Each character contained its own world that was conjured up by it’s meaning. Through the characters, the world that people call up connects and interacts with others to create a new continuously changing world. </p>
                    <a href="https://borderless.teamlab.art/shanghai/ew/whatloving-dark_shanghai/" style={{...workQuoteLinkStyle, fontSize:quoteFontSize}}>https://borderless.teamlab.art/shanghai/ew/whatloving-dark_shanghai/</a>
                </blockquote>
                <div style={{...workYoutubeWrapStyle, top:youtubeTop}}>
                    <iframe style={workYoutubeStyle} width="560" height="315" src="https://www.youtube.com/embed/y-PbjlUMBb8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <img src={worldWork1Img} style={{...workMainImgStyle, top:afterYoutubeImgTop}}></img>
                <img src={worldWork2Img} style={{...workMainImgStyle, top:afterYoutubeImg2Top}}></img>
            </div>
        );
    }
}