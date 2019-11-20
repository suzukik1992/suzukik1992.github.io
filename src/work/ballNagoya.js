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
import ballNagoyaImg from '../media/works/ball_nagoya.jpg';
import ballNagoyaWork1Img from '../media/works/ball_nagoya_work_1.jpg';

export class BallNagoya extends React.Component {

    render() {

        let windowWidth = this.props.windowWidth;
        let titleFontSizeRate = 23;
        let titleFontSize = 100/titleFontSizeRate + "vw";

        let bioFontSize = 100/workCommonFactor.bioFontSizeRate + "vw";
        let bioPaddingBottom = 100/workCommonFactor.bioPaddingBottomRate + "vw";
        let introFontSize = 100/workCommonFactor.introFontSizeRate + "vw";
        let introPaddingBottom = 100/workCommonFactor.introPaddingBottomRate + "vw";
        let youtubeTop = 100/workCommonFactor.youtubeTopRate + "vw";
        let quoteBorderThick = 100/workCommonFactor.quoteBorderThickRate + "vw";
        let quoteFontSize = 100/workCommonFactor.quoteFontSizeRate + "vw";
        let firstImgTopFromQuote = 100/workCommonFactor.firstImgTopFromQuoteRate + "vw";

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
        }

        let quoteBorderLeft = `${quoteBorderThick} solid ${myColor.whiteFade}`;

        return(
            <div style={workMainDivStyle}>
                <img src={ballNagoyaImg} style={workMainImgStyle}></img>
                <p style={{...workTitleStyle, fontSize:titleFontSize}}>Floating, Resonating Spheres - Nagoya Castle</p>
                <p style={{...workBiographyStyle, fontSize:bioFontSize, paddingBottom:bioPaddingBottom}}>2017/12, Sound Programer, MaxMsp, Pure Data, Raspberry Pi</p>
                <p style={{...workIntroductionStyle, fontSize:introFontSize, paddingBottom:introPaddingBottom}}>Developed surround system that can handle a space beyond several hundred meters using multiple Raspberry Pis.</p>
                <blockquote style={{...workBlockquoteStyle, borderLeft:quoteBorderLeft}}>
                    <p style={{...workQuoteStyle, fontSize:quoteFontSize}}>The spheres of light floating in Nagoya Castle, are autonomous, the light shines brightly and then disappears, as if it is slowly breathing.</p>
                    <p style={{...workQuoteStyle, fontSize:quoteFontSize}}>When the spheres of light are touched by a person or receive an impact, the color of their light changes, and they emit a unique color tone. The color then resonates out to the spheres around them. The resonating light is transmitted to the next spheres one after another, spreading the color tone in the same way continuously.</p>
                    <a href="https://www.teamlab.art/ew/nagoya-castle/" style={{...workQuoteLinkStyle, fontSize:quoteFontSize}}>https://www.teamlab.art/ew/nagoya-castle/</a>
                </blockquote>
                <img src={ballNagoyaWork1Img} style={{...workMainImgStyle, top:firstImgTopFromQuote}}></img>
            </div>
        );
    }
}