import React from 'react';
import { Link } from 'react-router-dom';
import { Work } from './work';
import { maxWindowWidth } from './style.js'

// image path
import monsterHunterWorldImg from './media/works/monsterHunterWorld.jpg';
import monolithImg from './media/works/monolith.jpg';
import prosound_201906Img from './media/works/prosound_201906.jpg';
import synesthesiaLabImg from './media/works/synesthesiaLab.jpg';
import mangroveImg from './media/works/mangrove.jpg';
import memoryImg from './media/works/memory.jpg';
import kintowariImg from './media/works/kintowari.jpg';
import loopSetImg from './media/works/loopSet.jpg';
import floatingLampImg from './media/works/floatingLamp.jpg';
import evessaImg from './media/works/evessa.jpg';
import cristalWorldImg from './media/works/cristalWorld.jpg';
import cristalUniverseImg from './media/works/cristalUniverse.jpg';
import boulderingImg from './media/works/bouldering.jpg';
import peaceImg from './media/works/peace.jpg';
import worldImg from './media/works/world.jpg'
import amcj_fes2018Img from './media/works/amcj_fes2018.jpg';
import amcj_002Img from './media/works/amcj_002_works.jpg';
import amcjImg from './media/works/amcj.jpg';
import sourceCord_002Img from './media/works/sourceCord_002.jpg';
import ballNagoyaImg from './media/works/ball_nagoya.jpg';
import soundAndRecording_202001Img from './media/works/soundAndRecording_202001.jpg';

const worksStyle = {
    width: "100%",
    display: "grid",
    gridTemplate: "repeat(7, 1fr) / repeat(3, 1fr)",
    backgroundColor: "black",
}

export class Works extends React.Component {
    
    render() {

        let windowWidth = this.props.windowWidth;
        return(
            <div style={{...worksStyle}}>
                <Work id="s&r_202001" title="Sound & Recording Magazine 2020 1" src={soundAndRecording_202001Img} windowWidth={this.props.windowWidth}/>
                <Work id="loopSet" title="M4L loopset" src={loopSetImg} windowWidth={this.props.windowWidth}/>
                <Link to='/works/monolith' style={{textDecoration: "none"}}><Work id="monolith" title="Moving Creates Vortices and Vortices Create Movement" src={monolithImg} windowWidth={windowWidth}/></Link>
                <Link to='/works/world' style={{textDecoration: "none"}}><Work id="world" title="Born From the Darkness a Loving, and Beautiful World" src={worldImg} windowWidth={windowWidth}/></Link>
                <Link to='/works/amcj_002' style={{textDecoration: "none"}}><Work id="amcj_002" title="AMCJ #002 Surround" src={amcj_002Img} windowWidth={windowWidth}/></Link>
                <Link to='/works/floatingLamp' style={{textDecoration: "none"}}><Work id="floatingLamp" title="Fire/Floating Resonating Lamps" src={floatingLampImg} windowWidth={windowWidth}/></Link>
                <Link to='/works/prosound_201906' style={{textDecoration: "none"}}><Work id="prosound_201906" title="PROSOUND 2019 6" src={prosound_201906Img} windowWidth={windowWidth}/></Link>
                <Link to='/works/mangrove' style={{textDecoration: "none"}}><Work id="mangrove" title="Continuous Life in a Beautiful World" src={mangroveImg} windowWidth={windowWidth}/></Link>
                <Link to='/works/synesthesiaLab' style={{textDecoration: "none"}}><Work id="synesthesiaLab" title="Synesthesia X1 - 2.44" src={synesthesiaLabImg} windowWidth={windowWidth}/></Link>
                <Link to='/works/sourceCord_002' style={{textDecoration: "none"}}><Work id="sourceCord_002" title="source cord #002" src={sourceCord_002Img} windowWidth={windowWidth}/></Link>
                <Link to='/works/amcj_fes2018' style={{textDecoration: "none"}}><Work id="amcj_fes2018" title="AMCJ Fes 2018" src={amcj_fes2018Img} windowWidth={windowWidth}/></Link> 
                <Link to='/works/amcj' style={{textDecoration: "none"}}><Work id="amcj" title="AMCJ" src={amcjImg} windowWidth={windowWidth}/></Link>
                <Link to='/works/kintowari' style={{textDecoration: "none"}}><Work id="kinto-wari" title="M4L kintowari" src={kintowariImg} windowWidth={windowWidth}/></Link> 
                <Link to='/works/cristalUniverse' style={{textDecoration: "none"}}><Work id="cristalUniverse" title="The Infinite Crystal Universe" src={cristalUniverseImg} windowWidth={windowWidth}/></Link> 
                <Link to='/works/cristalWorld' style={{textDecoration: "none"}}><Work id="cristalWorld" title="Wander through the Crystal World" src={cristalWorldImg} windowWidth={windowWidth}/></Link>
                <Link to='/works/bouldering' style={{textDecoration: "none"}}><Work id="bouldering" title="Light Forest Three-dimensional Bouldering" src={boulderingImg} windowWidth={windowWidth}/></Link>
                <Link to='/works/peace' style={{textDecoration: "none"}}><Work id="peace" title="Peace can be Realized Even without Order" src={peaceImg} windowWidth={windowWidth}/></Link>  
                <Link to='/works/memory' style={{textDecoration: "none"}}><Work id="memory" title="Memory of Topography" src={memoryImg} windowWidth={windowWidth}/></Link>
                <Link to='/works/ballNagoya' style={{textDecoration: "none"}}><Work id="ballNagoya" title="Floating, Resonating Spheres - Nagoya Castle" src={ballNagoyaImg} windowWidth={windowWidth}/></Link>
                <Link to='/works/evessa' style={{textDecoration: "none"}}><Work id="evessa" title="Evessa × teamLab" src={evessaImg} windowWidth={windowWidth}/></Link>
                <Link to='/works/monsterHunterWorld' style={{textDecoration: "none"}}><Work id="monsterHunterWorld" title="MONSTER HUNTER WORLD" src={monsterHunterWorldImg} windowWidth={windowWidth}/></Link>
            </div>
        )
    }

}