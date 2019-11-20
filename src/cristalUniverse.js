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
import cristalUniverseImg from './media/cristalUniverse.jpg';
import cristalUniverseWork1Img from './media/cristalUniverse_work_1.jpg';
import cristalUniverseWork2Img from './media/cristalUniverse_work_2.jpg';
import cristalUniverseWork3Img from './media/cristalUniverse_work_3.jpg';

export class CristalUniverse extends React.Component {

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
                <img src={cristalUniverseImg} style={workMainImgStyle}></img>
                <p style={{...workTitleStyle, fontSize:titleFontSize}}>The Infinite Crystal Universe</p>
                <p style={{...workBiographyStyle, fontSize:bioFontSize, paddingBottom:bioPaddingBottom}}>2018/07, Sound Programer / Sound Designer, MaxMsp</p>
                <p style={{...workIntroductionStyle, fontSize:introFontSize, paddingBottom:introPaddingBottom}}>Developed 24.1ch surrund system and interactive system. And also made the sound of some elements.</p>
                <blockquote style={{...workBlockquoteStyle, borderLeft:quoteBorderLeft}}>
                    <p style={{...workQuoteStyle, fontSize:quoteFontSize}}>Pointillism uses an accumulation of distinct dots of color to create a picture. Here, light points are used to create three-dimensional objects. This interactive artwork expresses the universe through accumulated light points that spread infinitely in all directions.</p>
                    <p style={{...workQuoteStyle, fontSize:quoteFontSize}}>People can use their smartphones to select elements that make up the universe by dragging them and releasing them into the The Infinite Crystal Universe. Each element of the universe sent into the work influences that of other elements and is influenced by the presence of people in the space.</p>
                    <p style={{...workQuoteStyle, fontSize:quoteFontSize}}>This artwork is forever evolving, changing moment to moment due to the people in the space.</p>
                    <a href="https://www.teamlab.art/w/infinite_crystaluniverse" style={{...workQuoteLinkStyle, fontSize:quoteFontSize}}>https://www.teamlab.art/w/infinite_crystaluniverse</a>
                </blockquote>
                <div style={{...workYoutubeWrapStyle, top:youtubeTop}}>
                    <iframe style={workYoutubeStyle} width="560" height="315" src="https://www.youtube.com/embed/qt3AW9flF4Q" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <img src={cristalUniverseWork1Img} style={{...workMainImgStyle, top:afterYoutubeImgTop}}></img>
                <img src={cristalUniverseWork2Img} style={{...workMainImgStyle, top:afterYoutubeImg2Top}}></img>
                <img src={cristalUniverseWork3Img} style={{...workMainImgStyle, top:afterYoutubeImg3Top}}></img>
            </div>
        );
    }
}