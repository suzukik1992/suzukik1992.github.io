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
    workInlineLinkStyle,
    maxWindowWidth,
    workCommonFactor
} from '../style';
import kintowariImg from '../media/works/kintowari.png';
import kintowariWork1Img from '../media/works/kintowari_work_1.jpg';

export class Kintowari extends React.Component {

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
        let afterNoQuoteYoutubeImgTop = 100/workCommonFactor.afterNoQuoteYoutubeImgTopRate + "vw";

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
            afterNoQuoteYoutubeImgTop = windowWidth/workCommonFactor.afterNoQuoteYoutubeImgTopRate + "px";
        }

        return(
            <div style={workMainDivStyle}>
                <img src={kintowariImg} style={workMainImgStyle}></img>
                <p style={{...workTitleStyle, fontSize:titleFontSize}}>M4L Kinto-wari</p>
                <p style={{...workBiographyStyle, fontSize:bioFontSize, paddingBottom:bioPaddingBottom}}>>2018/07, Sound Programer, Max for Live, Ableton Live</p>
                <p style={{...workIntroductionStyle, fontSize:introFontSize, paddingBottom:introPaddingBottom}}>This is a new sense sampler Max for Live device that can be used with Ableton Live. This is a project with <a href="https://twitter.com/KeiKusama" style={workInlineLinkStyle}>Kei Kusama</a>. Starting from <a href="https://camp-fire.jp/en/projects/view/39952" style={workInlineLinkStyle}>this crowdfunding</a>, we gathered 80 supporters. I was in charge of development of Max for Live.</p>
                <p style={{...workIntroductionStyle, fontSize:introFontSize, paddingBottom:introPaddingBottom}}><a href="https://gumroad.com/l/qGIsR" style={workInlineLinkStyle}>Web Store</a></p>
                <div style={{...workYoutubeWrapStyle}}>
                    <iframe style={workYoutubeStyle} width="560" height="315" src="https://www.youtube.com/embed/6V0MZvzneVM" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <img src={kintowariWork1Img} style={{...workSubImgStyle, top:afterNoQuoteYoutubeImgTop}}></img>
            </div>
        );
    }
}