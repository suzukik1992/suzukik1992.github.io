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
import ball_nagoyaImg from './media/works/ball_nagoya.jpg';


const worksStyle = {
    display: "grid",
    width: "100%",
    gridTemplate: "repeat(7, 1fr) / repeat(3, 1fr)",
    backgroundColor: "black"
}

export class Works extends React.Component {
    
    render() {
        return(
            <div style={worksStyle}>
                <Work id="loopSet" year="2019 November" title="M4L loopset" src={loopSetImg}/>
                <Work id="monolith" year="2019 November" title="Moving Creates Vortices and Vortices Create Movement" src={monolithImg}/>
                <Work id="world" year="2019 November" title="Born From the Darkness a Loving, and Beautiful World" src={worldImg}/>
                <Work id="amcj_002" year="2019 Augast" title="AMCJ #002" src={amcj_002Img}/>
                <Work id="floatingRamp" year="2019 Augast" title="Fire/Floating Resonating Lamps" src={floatingRampImg}/>
                <Work id="prosound_201906" year="2019 June" title="PROSOUND 2019 6" src={prosound_201906Img}/>
                <Work id="mangrove" year="2019 May" title="Continuous Life in a Beautiful World" src={mangroveImg}/>
                <Work id="synesthesiaLab" year="2019 February" title="Synesthesia X1 - 2.44" src={synesthesiaLabImg}/>
                <Work id="sourceCord_002" year="2018 December" title="source cord #002" src={sourceCord_002Img}/>
                <Work id="amcj_fes2018" year="2018 September" title="AMCJ Fes 2018" src={amcj_fes2018Img}/> 
                <Work id="amcj" year="2018 July" title="Ableton and Max Community Japan" src={amcjImg}/>
                <Work id="kinto-wari" year="2018 July" title="M4L kintowari" src={kintowariImg}/> 
                <Work id="cristalUniverse" year="2018 July" title="The Infinite Crystal Universe" src={cristalUniverseImg}/> 
                <Work id="cristalWorld" year="2018 June" title="Wander through the Crystal World" src={cristalWorldImg}/> 
                <Work id="bouldering" year="2018 June" title="Light Forest Three-dimensional Bouldering" src={boulderingImg}/>
                <Work id="peace" year="2018 June" title="Peace can be Realized Even without Order" src={peaceImg}/>  
                <Work id="memory" year="2018 June" title="Memory of Topography" src={memoryImg}/> 
                <Work id="ball_nagoya" year="2017 December" title="Floating, Resonating Spheres - Nagoya Castle" src={ball_nagoyaImg}/> 
                <Work id="evessa" year="2017 October" title="Evessa × teamLab" src={evessaImg}/>
                <Link to='/works/monsterHunterWorld' style={{textDecoration: "none"}}><Work id="monsterHunterWorld" year="2017 September" title="MONSTER HUNTER WORLD" src={monsterHunterWorldImg}/></Link>
            </div>
        )
    }

}