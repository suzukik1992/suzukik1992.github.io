import React from 'react';

// work pages component
import { MonsterHunterWorld } from './work/monsterHunterWorld';
import { Evessa } from './work/evessa';
import { BallNagoya } from './work/ballNagoya';
import { Memory } from './work/memory';
import { Peace } from './work/peace';
import { Bouldering } from './work/bouldering';
import { CristalWorld } from './work/cristalWorld';
import { CristalUniverse } from './work/cristalUniverse';
import { Kintowari } from './work/kintowari';
import { Amcj } from './work/amcj';
import { Amcj_fes2018 } from './work/amcj_fes2018';
import { SourceCord_002 } from './work/sourceCord_002';
import { Mangrove } from './work/mangrove';
import { Prosound_201906 } from './work/prosound_201906';
import { FloatingLamp } from './work/floatingLamp';
import { Amcj_002 } from './work/amcj_002';
import { World } from './work/world';
import { Monolith } from './work/monolith';
// import { LoopSet } from './work/loopSet';
import { SynesthesiaLab } from './work/synesthesiaLab';




export class WorkContent extends React.Component {

    render(props) {
        let title = this.props.workTitle;
        switch(title) {

            case "monsterHunterWorld":
                return(
                    <MonsterHunterWorld windowWidth={this.props.windowWidth}/>
                );
            break;

            case "evessa":
                return(
                    <Evessa windowWidth={this.props.windowWidth}/>
                );
            break;

            case "ballNagoya":
                    return(
                        <BallNagoya windowWidth={this.props.windowWidth}/>
                    );
                break;

            case "memory":
                    return(
                        <Memory windowWidth={this.props.windowWidth}/>
                    );
                break;

            case "peace":
                    return(
                        <Peace windowWidth={this.props.windowWidth}/>
                    );
                break;

            case "bouldering":
                    return(
                        <Bouldering windowWidth={this.props.windowWidth}/>
                    );
                break;
                
            case "cristalWorld":
                    return(
                        <CristalWorld windowWidth={this.props.windowWidth}/>
                    );
                break;

            case "cristalUniverse":
                    return(
                        <CristalUniverse windowWidth={this.props.windowWidth}/>
                    );
                break;

            case "kintowari":
                    return(
                        <Kintowari windowWidth={this.props.windowWidth}/>
                    );
                break;

            case "amcj":
                    return(
                        <Amcj windowWidth={this.props.windowWidth}/>
                    );
                break;

            case "amcj_fes2018":
                    return(
                        <Amcj_fes2018 windowWidth={this.props.windowWidth}/>
                    );
                break;

            case "sourceCord_002":
                    return(
                        <SourceCord_002 windowWidth={this.props.windowWidth}/>
                    );
                break;

            case "synesthesiaLab":
                    return(
                        <SynesthesiaLab windowWidth={this.props.windowWidth}/>
                    );
                break;
                                                
            case "mangrove":
                    return(
                        <Mangrove windowWidth={this.props.windowWidth}/>
                    );
                break;

            case "prosound_201906":
                    return(
                        <Prosound_201906 windowWidth={this.props.windowWidth}/>
                    );
                break;

            case "floatingLamp":
                    return(
                        <FloatingLamp windowWidth={this.props.windowWidth}/>
                    );
                break;

            case "amcj_002":
                    return(
                        <Amcj_002 windowWidth={this.props.windowWidth}/>
                    );
                break;

            case "world":
                    return(
                        <World windowWidth={this.props.windowWidth}/>
                    );
                break;

            case "monolith":
                    return(
                        <Monolith windowWidth={this.props.windowWidth}/>
                    );
                break;

            // case "loopSet":
            //         return(
            //             <LoopSet windowWidth={this.props.windowWidth}/>
            //         );
            //     break;
                                                                                                                                                                        
        }
    }
}