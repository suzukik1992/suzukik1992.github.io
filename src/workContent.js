import React from 'react';

// work pages component
import { MonsterHunterWorld } from './monsterHunterWorld';
import { Evessa } from './evessa';
import { BallNagoya } from './ballNagoya';
import { Memory } from './memory';
import { Peace } from './peace';
import { Bouldering } from './bouldering';
import { CristalWorld } from './cristalWorld';
import { CristalUniverse } from './cristalUniverse';
import { Kintowari } from './kintowari';
import { Amcj } from './amcj';
import { Amcj_fes2018 } from './amcj_fes2018';
import { SourceCord_002 } from './sourceCord_002';
import { Mangrove } from './mangrove';
import { Prosound_201906 } from './prosound_201906';
import { FloatingLamp } from './floatingLamp';
import { Amcj_002 } from './amcj_002';
import { World } from './world';
import { Monolith } from './monolith';
// import { LoopSet } from './loopSet';
import { SynesthesiaLab } from './synesthesiaLab';




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