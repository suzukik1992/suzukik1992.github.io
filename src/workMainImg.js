import React from 'react';

// image path
import monsterHunterWorldImg from './media/works/monsterHunterWorld.png';
import monolithImg from './media/works/monolith.jpg';
import prosound_201906Img from './media/works/prosound_201906.jpg';
import synesthesiaLabImg from './media/works/SynesthesiaLab.jpg';
import mangroveImg from './media/works/mangrove.jpg';
import memoryImg from './media/works/memory.jpg';
import kintowariImg from './media/works/kintowari.png';
import loopSetImg from './media/works/loopSet.png';
import floatingRampImg from './media/works/floatingRamp.jpg';
import evessaImg from './media/works/evessa.png';
import cristalWorldImg from './media/works/cristalWorld.jpg';
import cristalUniverseImg from './media/works/cristalUniverse.jpg';
import boulderingImg from './media/works/bouldering.jpg';
import peaceImg from './media/works/peace.jpg';
import worldImg from './media/works/world.jpg'
import amcj_fes2018Img from './media/works/amcj_fes2018.png';
import amcj_002Img from './media/works/amcj_002_works.png';
import amcjImg from './media/works/amcj.png';
import sourceCord_002Img from './media/works/sourceCord_002.jpg';
import ball_nagoyaImg from './media/works/ball_nagoya.jpg';

const imgPathObj = {

    monsterHunterWorld: monsterHunterWorldImg

}

const workMainImgStyle = {
    display: "block",
    position: 'relative',
    top: '5vw',
    width: "90%",
    objectFit: "cover",
    margin: "auto"
}

export class WorkMainImg extends React.Component {
    render(props) {
        let title = this.props.title;
        return(
            <img style={workMainImgStyle} src={imgPathObj[title]}></img>
        );
    }
}