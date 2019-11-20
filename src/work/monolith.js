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
import monolithImg from '../media/works/monolith.jpg';
import monolithWork1Img from '../media/works/monolith_work_1.jpg';
import monolithWork2Img from '../media/works/monolith_work_2.jpg';

export class Monolith extends React.Component {

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
                <img src={monolithImg} style={workMainImgStyle}></img>
                <p style={{...workTitleStyle, fontSize:titleFontSize}}>The Columns</p>
                <p style={{...workBiographyStyle, fontSize:bioFontSize, paddingBottom:bioPaddingBottom}}>2019/11, Sound Programer / Sound Designer, MaxMsp</p>
                <p style={{...workIntroductionStyle, fontSize:introFontSize, paddingBottom:introPaddingBottom}}>Developed 32.1ch surrund system and a generative audio system that does not use any sample files. And it will change forever under the influence of particles on the floor.</p>
                <blockquote style={{...workBlockquoteStyle, borderLeft:quoteBorderLeft}}>
                    <p style={{...workQuoteStyle, fontSize:quoteFontSize}}>A group of standing waterfall columns.When people approach, the flow of the water changes.</p>
                    <p style={{...workQuoteStyle, fontSize:quoteFontSize}}>The waterfalls are influenced by other artworks. When there is a lot of water in the artwork overhead, Universe of Water Particles on a Rock Hill where People Gather, more water flows in this work. When there is not much water in the other work, the water in The Columns depletes.This artwork also influences other works. The water that flows down The Columns applies power and force to the currents in the artwork Moving Creates Vortices and Vortices Create Movement spread across the floor.</p>
                    <p style={{...workQuoteStyle, fontSize:quoteFontSize}}>Water in the artwork is expressed as a continuum of numerous particles and the interaction between the particles is calculated. Lines are drawn according to the trails of the particles. The cumulation of lines that represent the work are then “flattened” in line with what teamLab considers to be ultrasubjective space.</p>
                    <p style={{...workQuoteStyle, fontSize:quoteFontSize}}>The work is continuously and eternally changing, influenced by people and other artworks, while influencing other works itself.</p>
                    <a href="https://borderless.teamlab.art/shanghai/ew/vortices_shanghai/" style={{...workQuoteLinkStyle, fontSize:quoteFontSize}}>https://borderless.teamlab.art/shanghai/ew/vortices_shanghai/</a>
                </blockquote>
                <div style={{...workYoutubeWrapStyle, top:youtubeTop}}>
                    <iframe style={workYoutubeStyle} width="560" height="315" src="https://www.youtube.com/embed/YN4t2aEQvFk" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <img src={monolithWork1Img} style={{...workMainImgStyle, top:afterYoutubeImgTop}}></img>
                <img src={monolithWork2Img} style={{...workMainImgStyle, top:afterYoutubeImg2Top}}></img>
            </div>
        );
    }
}