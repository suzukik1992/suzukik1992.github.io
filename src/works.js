import React from 'react';
import { Link } from 'react-router-dom';
import { Work } from './work';

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
import ballNagoyaImg from './media/works/ball_nagoya.jpg';


const worksStyle = {
    display: "grid",
    width: "100%",
    gridTemplate: "repeat(7, 1fr) / repeat(3, 1fr)",
    backgroundColor: "black",
    position: 'relative',
    top: '8vw'
}

export class Works extends React.Component {
    
    render() {
        return(
            <div style={worksStyle}>
                <Link to='/works/loopSet' style={{textDecoration: "none"}}><Work id="loopSet" year="2019 November" title="M4L loopset" src={loopSetImg}/></Link>
                <Link to='/works/monolith' style={{textDecoration: "none"}}><Work id="monolith" year="2019 November" title="Moving Creates Vortices and Vortices Create Movement" src={monolithImg}/></Link>
                <Link to='/works/world' style={{textDecoration: "none"}}><Work id="world" year="2019 November" title="Born From the Darkness a Loving, and Beautiful World" src={worldImg}/></Link>
                <Link to='/works/amcj_002' style={{textDecoration: "none"}}><Work id="amcj_002" year="2019 Augast" title="AMCJ #002" src={amcj_002Img}/></Link>
                <Link to='/works/floatingRamp' style={{textDecoration: "none"}}><Work id="floatingRamp" year="2019 Augast" title="Fire/Floating Resonating Lamps" src={floatingRampImg}/></Link>
                <Link to='/works/prosound_201906' style={{textDecoration: "none"}}><Work id="prosound_201906" year="2019 June" title="PROSOUND 2019 6" src={prosound_201906Img}/></Link>
                <Link to='/works/mangrove' style={{textDecoration: "none"}}><Work id="mangrove" year="2019 May" title="Continuous Life in a Beautiful World" src={mangroveImg}/></Link>
                <Link to='/works/synethesiaLab' style={{textDecoration: "none"}}><Work id="synesthesiaLab" year="2019 February" title="Synesthesia X1 - 2.44" src={synesthesiaLabImg}/></Link>
                <Link to='/works/souceCord_002' style={{textDecoration: "none"}}><Work id="sourceCord_002" year="2018 December" title="source cord #002" src={sourceCord_002Img}/></Link>
                <Link to='/works/amcj_fes2018' style={{textDecoration: "none"}}><Work id="amcj_fes2018" year="2018 September" title="AMCJ Fes 2018" src={amcj_fes2018Img}/></Link> 
                <Link to='/works/amcj' style={{textDecoration: "none"}}><Work id="amcj" year="2018 July" title="Ableton and Max Community Japan" src={amcjImg}/></Link>
                <Link to='/works/kintowari' style={{textDecoration: "none"}}><Work id="kinto-wari" year="2018 July" title="M4L kintowari" src={kintowariImg}/></Link> 
                <Link to='/works/cristalUniverse' style={{textDecoration: "none"}}><Work id="cristalUniverse" year="2018 July" title="The Infinite Crystal Universe" src={cristalUniverseImg}/></Link> 
                <Link to='/works/cristalWorld' style={{textDecoration: "none"}}><Work id="cristalWorld" year="2018 June" title="Wander through the Crystal World" src={cristalWorldImg}/></Link>
                <Link to='/works/bouldering' style={{textDecoration: "none"}}><Work id="bouldering" year="2018 June" title="Light Forest Three-dimensional Bouldering" src={boulderingImg}/></Link>
                <Link to='/works/peace' style={{textDecoration: "none"}}><Work id="peace" year="2018 June" title="Peace can be Realized Even without Order" src={peaceImg}/></Link>  
                <Link to='/works/memory' style={{textDecoration: "none"}}><Work id="memory" year="2018 June" title="Memory of Topography" src={memoryImg}/></Link>
                <Link to='/works/ballNagoya' style={{textDecoration: "none"}}><Work id="ballNagoya" year="2017 December" title="Floating, Resonating Spheres - Nagoya Castle" src={ballNagoyaImg}/></Link>
                <Link to='/works/evessa' style={{textDecoration: "none"}}><Work id="evessa" year="2017 October" title="Evessa × teamLab" src={evessaImg}/></Link>
                <Link to='/works/monsterHunterWorld' style={{textDecoration: "none"}}><Work id="monsterHunterWorld" year="2017 September" title="MONSTER HUNTER WORLD" src={monsterHunterWorldImg}/></Link>
            </div>
        )
    }

}