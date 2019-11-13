import React from 'react';

// work pages component
import { MonsterHunterWorld } from './work/monsterHunterWorld';
import { Evessa } from './work/evessa';
import { BallNagoya } from './work/ballNagoya';
import { Memory } from './work/memory';
import { Peace } from './work/peace';
// import { Bouldering } from './work/bouldering';
// import { CristalWorld } from './work/cristalWorld';
// import { CristalUniverse } from './work/cristalUniverse';
// import { Kintowari } from './work/kintowari';
// import { Amcj } from './work/amcj';
// import { Amcj_fes2018 } from './work/amcj_fes2018';
// import { SourceCord_002 } from './work/sourceCord_002';
// import { Mangrove } from './work/mangrove';
// import { Prosound_201906 } from './work/prosound_201906';
// import { FloatingRamp } from './work/floatingRamp';
// import { Amcj_002 } from './work/amcj_002';
// import { World } from './work/world';
// import { Monolith } from './work/monolith';
// import { LoopSet } from './work/loopSet';
// import { SynethesiaLab } from './work/synethesiaLab';




export class WorkContent extends React.Component {

    render(props) {
        let title = this.props.workTitle;
        switch(title) {

            case "monsterHunterWorld":
                return(
                    <MonsterHunterWorld />
                );
            break;

            case "evessa":
                return(
                    <Evessa />
                );
            break;

            case "ballNagoya":
                    return(
                        <BallNagoya />
                    );
                break;

            case "memory":
                    return(
                        <Memory />
                    );
                break;

            case "peace":
                    return(
                        <Peace />
                    );
                break;

            // case "bouldering":
            //         return(
            //             <Bouldering />
            //         );
            //     break;
                
            // case "cristalWorld":
            //         return(
            //             <CristalWorld />
            //         );
            //     break;

            // case "cristalUniverse":
            //         return(
            //             <CristalUniverse />
            //         );
            //     break;

            // case "kintowari":
            //         return(
            //             <Kintowari />
            //         );
            //     break;

            // case "amcj":
            //         return(
            //             <Amcj />
            //         );
            //     break;

            // case "amcj_fes2018":
            //         return(
            //             <Amcj_fes2018 />
            //         );
            //     break;

            // case "sourceCord_002":
            //         return(
            //             <SourceCord_002 />
            //         );
            //     break;

            // case "synethesiaLab":
            //         return(
            //             <SynethesiaLab />
            //         );
            //     break;
                                                
            // case "mangrove":
            //         return(
            //             <Mangrove />
            //         );
            //     break;

            // case "prosound_201906":
            //         return(
            //             <Prosound_201906 />
            //         );
            //     break;

            // case "floatingRamp":
            //         return(
            //             <FloatingRamp />
            //         );
            //     break;

            // case "amcj_002":
            //         return(
            //             <Amcj_002 />
            //         );
            //     break;

            // case "world":
            //         return(
            //             <World />
            //         );
            //     break;

            // case "monolith":
            //         return(
            //             <Monolith />
            //         );
            //     break;

            // case "loopSet":
            //         return(
            //             <LoopSet />
            //         );
            //     break;
                                                                                                                                                                        
        }
    }
}