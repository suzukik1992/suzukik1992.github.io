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
import mangroveImg from '../media/works/mangrove.jpg';
import mangroveWork1Img from '../media/works/mangrove_work_1.jpg';
import mangroveWork2Img from '../media/works/mangrove_work_2.jpg';
import mangroveWork3Img from '../media/works/mangrove_work_3.jpg';

export class Mangrove extends React.Component {

    render() {

        let windowWidth = this.props.windowWidth;
        let titleFontSizeRate = 19;
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
                <img src={mangroveImg} style={workMainImgStyle}></img>
                <p style={{...workTitleStyle, fontSize:titleFontSize}}>Continuous Life in a Beautiful World</p>
                <p style={{...workBiographyStyle, fontSize:bioFontSize, paddingBottom:bioPaddingBottom}}>2019/04, Sound Programer / Sound Designer, MaxMsp</p>
                <p style={{...workIntroductionStyle, fontSize:introFontSize, paddingBottom:introPaddingBottom}}>Developed 32.2ch surrund system and interactive system. Also created sounds including several environmental se and developed a real-time multi-channel granular process to enhance the underwater immersion.</p>
                <blockquote style={{...workBlockquoteStyle, borderLeft:quoteBorderLeft}}>
                    <p style={{...workQuoteStyle, fontSize:quoteFontSize}}>This artwork installation starts from a life-sized mangrove forest. After a while, visitors shrink to a microscopic size and an underwater world expands before them, becoming a world of plankton and microorganisms that is normally invisible to the naked eye.</p>
                    <p style={{...workQuoteStyle, fontSize:quoteFontSize}}>A continuous, living world is expressed through the abundant and beautiful mangrove forest ecosystem: the mangrove trees, the birds that live in the mangrove forest, the fish in the water, and the plankton and other microorganisms.</p>
                    <p style={{...workQuoteStyle, fontSize:quoteFontSize}}>The life of the mangrove forest changes interactively due to the presence of people. Each person has a color, and the creatures that pass close by are dyed that color.</p>
                    <p style={{...workQuoteStyle, fontSize:quoteFontSize}}>The resonating lamps on the water’s surface change location moment by moment. Because the total distance covered by the propagating light is the shortest possible, even if the same lamp starts to shine, the path of light changes every moment.</p>
                    <a href="https://www.teamlab.art/w/continuous_life_in_a_beautiful_world/" style={{...workQuoteLinkStyle, fontSize:quoteFontSize}}>https://www.teamlab.art/w/continuous_life_in_a_beautiful_world/</a>
                </blockquote>
                <div style={{...workYoutubeWrapStyle, top:youtubeTop}}>
                    <iframe style={workYoutubeStyle} width="560" height="315" src="https://www.youtube.com/embed/DBCZLmzb6KE" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <img src={mangroveWork1Img} style={{...workMainImgStyle, top:afterYoutubeImgTop}}></img>
                <img src={mangroveWork2Img} style={{...workMainImgStyle, top:afterYoutubeImg2Top}}></img>
                <img src={mangroveWork3Img} style={{...workMainImgStyle, top:afterYoutubeImg3Top}}></img>
            </div>
        );
    }
}