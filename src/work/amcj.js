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
import amcjImg from '../media/works/amcj.jpg';

export class Amcj extends React.Component {

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

        return(
            <div style={workMainDivStyle}>
                <img src={amcjImg} style={workMainImgStyle}></img>
                <p style={{...workTitleStyle, fontSize:titleFontSize}}>Ableton and Max Community Japan</p>
                <p style={{...workBiographyStyle, fontSize:bioFontSize, paddingBottom:bioPaddingBottom}}>2018/07, Organizer, Max for Live, Ableton Live, MaxMsp</p>
                <p style={{...workIntroductionStyle, fontSize:introFontSize, paddingBottom:introPaddingBottom}}>AMCJ stands for Ableton and Max Community Japan. This community was created with <a href="http://akihikomatsumoto.com/" style={workInlineLinkStyle}>Akihiko Matsumoto</a> and <a href="https://scrapbox.io/akiyukiokayasu/" style={workInlineLinkStyle}>Akiyuki Okayasu</a>. The purpose is to encourage MaxMsp / M4L programers to interact and to be active through <a href="https://abletonmaxcommunityjp.slack.com/join/shared_invite/enQtNDQzMzczNDM1Njg1LWMzYzlkMmUzYTNkOGI1Yjk5YzFlZWVlNWY1M2U0ZWY5OTAyNDMyMGE5MGFjNDI2YTM1N2U3ZTNkZGY2MWE1OGI" style={workInlineLinkStyle}>Slack</a> and real events at <a href="https://www.rittor-music.co.jp/rittorbase/" style={workInlineLinkStyle}>Rittor Base.</a></p>
                <p style={{...workIntroductionStyle, fontSize:introFontSize, paddingBottom:introPaddingBottom}}><a href="https://ableton-and-max-community-japan.github.io/" style={workInlineLinkStyle}>Official Site</a>, <a href="https://twitter.com/AMCJ_Official" style={workInlineLinkStyle}>Twitter</a></p>
            </div>
        );
    }
}