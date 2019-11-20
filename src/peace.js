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
import peaceImg from './media/peace.jpg';
import peaceWork1Img from './media/peace_work_1.jpg';
import peaceWork2Img from './media/peace_work_2.jpg';

export class Peace extends React.Component {

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
            <div style={ workMainDivStyle}>
                <img src={peaceImg} style={workMainImgStyle}></img>
                <p style={{...workTitleStyle, fontSize:titleFontSize}}>Peace can be Realized Even without Order</p>
                <p style={{...workBiographyStyle, fontSize:bioFontSize, paddingBottom:bioPaddingBottom}}>2018/06, Sound Programer, MaxMsp</p>
                <p style={{...workIntroductionStyle, fontSize:introFontSize, paddingBottom:introPaddingBottom}}>Developed 96.2ch surrund system and interactive system.</p>
                <blockquote style={{...workBlockquoteStyle, borderLeft:quoteBorderLeft}}>
                    <p style={{...workQuoteStyle, fontSize:quoteFontSize}}>This interactive digital installation consists of a seemingly endless number of life-sized holograms. The figures depicted in the holograms exist independently from one another. They play instruments and dance, and each individual is influenced by the sounds from the figures close to them. There is no lead figure that oversees or influences all the other dancers, and there is no center or order enforced on the crowd. External events can cause disorder, but in time, peace will gradually be restored.</p>
                    <p style={{...workQuoteStyle, fontSize:quoteFontSize}}>When a person enters the installation and a figure senses the viewer, that figure responds to the person and stops playing music. The figure passes on this information to other figures close by. After a short period of time, the figure will start playing music and dance again, but this disturbance will have disrupted the harmony. If, however, the viewer stays still or leaves, the dancers will begin to form back into one harmonious group and the feeling of peace will return.</p>
                    <p style={{...workQuoteStyle, fontSize:quoteFontSize}}>In Japan, there is a primitive dance festival called the Awa Dance Festival dating back so far that its origins are unknown. Groups of individual dancers play music and proceed around the town arbitrarily. Groups play their own music as they like and dance as they like. Interestingly, for some reason, the music forms into a peaceful order across the whole town. Dancers who randomly meet other groups of dancers gradually and subconsciously match the tempo of their music with that of the other group. This is not due to any set of rules; it just feels right and happens without conscious choice. It seems that when people are set free from their inhibitions, an extraordinary peaceful feeling prevails despite the lack of any order to the dances. Perhaps this is how people of ancient times maintained a feeling of peacefulness.</p>
                    <p style={{...workQuoteStyle, fontSize:quoteFontSize}}>Today, in the Internet age, the speed at which people can connect with others has accelerated. As a result, people throughout the world have become increasingly connected, and these connections have become more important. What we experience in this new age is similar to the experience of the dance festival, and perhaps in these unordered connections there is a way to find peace. The figures that appear in the holograms are anonymous and unknown. This helps the viewer to feel as though they are a part of the installation, and that anyone can experience the feeling of peace without order.</p>
                    <a href="https://borderless.teamlab.art/ew/peace/" style={{...workQuoteLinkStyle, fontSize:quoteFontSize}}>https://borderless.teamlab.art/ew/peace/</a>
                </blockquote>
                <div style={{...workYoutubeWrapStyle, top:youtubeTop}}>
                    <iframe style={workYoutubeStyle} width="560" height="315" src="https://www.youtube.com/embed/-ZVDbyKVy1U" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <img src={peaceWork1Img} style={{...workMainImgStyle, top:afterYoutubeImgTop}}></img>
                <img src={peaceWork2Img} style={{...workMainImgStyle, top:afterYoutubeImg2Top}}></img>
            </div>
        );
    }
}