import React from 'react';
import { 
        workMainImgStyle,
        workTitleStyle, 
        workBiographyStyle, 
        workIntroductionStyle, 
        workLinkStyle, 
        workYoutubeStyle,
        workYoutubeWrapStyle
    } from '../style';
import monsterHunterWorldImg from '../media/works/monsterHunterWorld.png';

const divStyle = {
    width: "100vw",

}

export class MonsterHunterWorld extends React.Component {

    render() {
        return(
            <div style={divStyle}>
                <img src={monsterHunterWorldImg} style={workMainImgStyle}></img>
                <p style={{...workTitleStyle, fontSize:"6vw"}}>MONSTER HUNTER WORLD</p>
                <p style={workBiographyStyle}>2017/08, Sound Designer, Pro Tools, WWISE, Ableton Live, MaxMsp</p>
                <p style={workIntroductionStyle}>As a CAPCOM sound designer, created almost all weapon and armor sounds from foley recording, implemented and adjusted them including other player related sound duties.</p>
                <a href="http://www.capcom.co.jp/monsterhunter/world/" style={workLinkStyle}>http://www.capcom.co.jp/monsterhunter/world/</a>
                <div style={workYoutubeWrapStyle}>
                    <iframe style={workYoutubeStyle} width="560" height="315" src="https://www.youtube.com/embed/v7EkXg-4VME" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        );
    }
}