import React from 'react';
import { Work } from './work';
import { myColor } from './style';

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


const worksStyle = {
    display: "grid",
    width: "100%",
    gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
    backgroundColor: "white"
}

export class Works extends React.Component {
    
    render() {
        return(
            <div style={worksStyle}>

                <Work id="loopSet" year="2019 11" title="loopset" src={loopSetImg}/>
                <Work id="monolith" year="2019 11" title="Monolith" src={monolithImg}/>
                <Work id="world" year="2019 11" title="Born From the Darkness a Loving, and Beautiful World" src={worldImg}/>
                <Work id="amcj_002" year="2019 08" title="AMCJ #002" src={amcj_002Img}/>
                <Work id="floatingRamp" year="2019 08" title="Fire/Floating Resonating Lamps" src={floatingRampImg}/>
                <Work id="prosound_201906" year="2019 06" title="PROSOUND 2019 6" src={prosound_201906Img}/>
                <Work id="mangrove" year="2019 05" title="Continuous Life in a Beautiful World" src={mangroveImg}/>
                <Work id="synesthesiaLab" year="2019 02" title="Synesthesia X1 - 2.44" src={synesthesiaLabImg}/>
                <Work id="sourceCord_002" year="2018 12" title="Source CORD #0002" src={sourceCord_002Img}/>
                <Work id="amcj_fes2018" year="2018 09" title="AMCJ Fes 2018" src={amcj_fes2018Img}/> 
                <Work id="amcj" year="2018 07" title="Ableton and Max Community Japan" src={amcjImg}/>
                <Work id="kinto-wari" year="2018 07" title="kintowari" src={kintowariImg}/> 
                <Work id="cristalUniverse" year="2018 07" title="The Infinite Crystal Universe" src={cristalUniverseImg}/> 
                <Work id="cristalWorld" year="2018 06" title="Wander through the Crystal World" src={cristalWorldImg}/> 
                <Work id="bouldering" year="2018 06" title="Light Forest Three-dimensional Bouldering" src={boulderingImg}/>
                <Work id="peace" year="2018 06" title="Peace can be Realized Even without Order" src={peaceImg}/>  
                <Work id="memory" year="2018 06" title="Memory of Topography" src={memoryImg}/> 
                <Work id="evessa" year="2017 10" title="大阪エヴェッサ × teamLab" src={evessaImg}/>  
                <Work id="monsterHunterWorld" year="2017 09" title="MONSTER HUNTER WORLD" src={monsterHunterWorldImg}/>           

            </div>
        )
    }

}