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
    workQuoteLinkStyle
} from '../style';
import peaceImg from '../media/works/peace.jpg';
import peaceWork1Img from '../media/works/peace_work_1.jpg';
import peaceWork2Img from '../media/works/peace_work_2.jpg';

const divStyle = {
    width: "100vw"
}

export class Peace extends React.Component {

    render() {
        return(
            <div style={divStyle}>
                <img src={peaceImg} style={workMainImgStyle}></img>
                <p style={{...workTitleStyle, fontSize:"4.2vw"}}>Peace can be Realized Even without Order</p>
                <p style={workBiographyStyle}>2018/06, Sound Programer, MaxMsp</p>
                <p style={workIntroductionStyle}>Developed the 96.2ch surrund system using MaxMsp.</p>
                <blockquote style={workBlockquoteStyle}>
                    <p style={workQuoteStyle}>This interactive digital installation consists of a seemingly endless number of life-sized holograms. The figures depicted in the holograms exist independently from one another. They play instruments and dance, and each individual is influenced by the sounds from the figures close to them. There is no lead figure that oversees or influences all the other dancers, and there is no center or order enforced on the crowd. External events can cause disorder, but in time, peace will gradually be restored.</p>
                    <p style={workQuoteStyle}>When a person enters the installation and a figure senses the viewer, that figure responds to the person and stops playing music. The figure passes on this information to other figures close by. After a short period of time, the figure will start playing music and dance again, but this disturbance will have disrupted the harmony. If, however, the viewer stays still or leaves, the dancers will begin to form back into one harmonious group and the feeling of peace will return.</p>
                    <p style={workQuoteStyle}>In Japan, there is a primitive dance festival called the Awa Dance Festival dating back so far that its origins are unknown. Groups of individual dancers play music and proceed around the town arbitrarily. Groups play their own music as they like and dance as they like. Interestingly, for some reason, the music forms into a peaceful order across the whole town. Dancers who randomly meet other groups of dancers gradually and subconsciously match the tempo of their music with that of the other group. This is not due to any set of rules; it just feels right and happens without conscious choice. It seems that when people are set free from their inhibitions, an extraordinary peaceful feeling prevails despite the lack of any order to the dances. Perhaps this is how people of ancient times maintained a feeling of peacefulness.</p>
                    <p style={workQuoteStyle}>Today, in the Internet age, the speed at which people can connect with others has accelerated. As a result, people throughout the world have become increasingly connected, and these connections have become more important. What we experience in this new age is similar to the experience of the dance festival, and perhaps in these unordered connections there is a way to find peace. The figures that appear in the holograms are anonymous and unknown. This helps the viewer to feel as though they are a part of the installation, and that anyone can experience the feeling of peace without order.</p>
                    <a href="https://www.teamlab.art/w/topography/" style={workQuoteLinkStyle}>https://www.teamlab.art/w/topography/</a>
                </blockquote>
                <div style={{...workYoutubeWrapStyle}}>
                    <iframe style={workYoutubeStyle} width="560" height="315" src="https://www.youtube.com/embed/-ZVDbyKVy1U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <img src={peaceWork1Img} style={{...workSubImgStyle, top:"15vw"}}></img>
                <img src={peaceWork2Img} style={{...workSubImgStyle, top:"20vw"}}></img>
            </div>
        );
    }
}