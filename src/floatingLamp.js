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
import floatingLampImg from './media/floatingLamp.jpg';
import floatingLampWork1Img from './media/floatingLamp_work_1.jpg';
import floatingLampWork2Img from './media/floatingLamp_work_2.jpg';

export class FloatingLamp extends React.Component {

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
                <img src={floatingLampImg} style={workMainImgStyle}></img>
                <p style={{...workTitleStyle, fontSize:titleFontSize}}>Floating Resonating Lamps - One Stroke, Fire</p>
                <p style={{...workBiographyStyle, fontSize:bioFontSize, paddingBottom:bioPaddingBottom}}>2019/08, Sound Programer, MaxMsp</p>
                <p style={{...workIntroductionStyle, fontSize:introFontSize, paddingBottom:introPaddingBottom}}>Developed 4ch surrund system and interactive system.</p>
                <blockquote style={{...workBlockquoteStyle, borderLeft:quoteBorderLeft}}>
                    <p style={{...workQuoteStyle, fontSize:quoteFontSize}}>The lamps floating on the water’s surface are autonomous, shining brightly and then fading as if breathing.</p>
                    <p style={{...workQuoteStyle, fontSize:quoteFontSize}}>When a person pushes a lamp so it bobs in the water, or when a person stands still nearby, the lamp  shines brightly and emits a color that resonates out. The light of that lamp is transmitted to other lamps. In the same way, a bright tone color sounds and propagates continuously through the other lamps. The transmitted light always travels through each of the lamps only once, shining brightly, as it propagates through all of the lamps. People become aware of the presence of others in the same space.</p>
                    <p style={{...workQuoteStyle, fontSize:quoteFontSize}}>The light is transmitted in such a way that it travels from one lamp to the next nearest lamp, to the next nearest lamp. In other words, the light travels in a single stroke along the shortest route through all of the lamps only once.</p>
                    <p style={{...workQuoteStyle, fontSize:quoteFontSize}}>The resonating lamps on the water’s surface change location moment by moment. Because the total distance covered by the propagating light is the shortest possible, even if the same lamp starts to shine, the path of light changes every moment.</p>
                    <p style={{...workQuoteStyle, fontSize:quoteFontSize}}>When the transmitted light meets with a light originating from a different starting point, the lamp where the two lights meet shines brightly for longer. People will surely feel the presence of others in the same space.</p>
                    <p style={{...workQuoteStyle, fontSize:quoteFontSize}}>*The lamps are made of Murano glass (Venetian glass).</p>
                    <a href="https://borderless.teamlab.art/shanghai/ew/whatloving-dark_shanghai/" style={{...workQuoteLinkStyle, fontSize:quoteFontSize}}>https://borderless.teamlab.art/shanghai/ew/whatloving-dark_shanghai/</a>
                </blockquote>
                <div style={{...workYoutubeWrapStyle, top:youtubeTop}}>
                    <iframe style={workYoutubeStyle} width="560" height="315" src="https://www.youtube.com/embed/1bsJxkzKfoI" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <img src={floatingLampWork1Img} style={{...workMainImgStyle, top:afterYoutubeImgTop}}></img>
                <img src={floatingLampWork2Img} style={{...workMainImgStyle, top:afterYoutubeImg2Top}}></img>
            </div>
        );
    }
}