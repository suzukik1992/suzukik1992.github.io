import React from 'react';
import { myColor } from './style.js'

const borderStyle = {

    position: 'relative',
    width: '100vw',
    margin: '0',
    padding: '0',
    borderBottomColor: myColor.yellow,
    borderBottomWidth: '0.4vw',
    borderBottomStyle: 'solid'

}

export class Border extends React.Component {

    render() {
        return(
            <div style={borderStyle}></div>
        );
    }
}