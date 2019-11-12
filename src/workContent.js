import React from 'react';
import { MonsterHunterWorld } from './work/monsterHunterWorld';

export class WorkContent extends React.Component {

    render(props) {
        let title = this.props.workTitle;
        switch(title) {
            case "monsterHunterWorld":
                return(
                    <MonsterHunterWorld />
                );
            break;
        }
    }
}