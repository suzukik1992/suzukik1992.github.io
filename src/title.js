import React from 'react';
import { myColor } from './style.js'

const titleNameStyle = {

    fontSize: "4vw",
    fontFamily: 'Montserrat, sans-serif',
    paddingLeft: '1vw',
    paddingTop: '0.5vw',
    textAlign: 'left',
    color: myColor.purple

};


const titleJobStyle = {

    fontSize: '2vw',
    fontWeight: 'normal',
    fontFamily: 'Montserrat, sans-serif',
    textAlign: 'left',
    paddingLeft: '1.2vw',
    paddingTop: '0vw',
    
    color: myColor.grey,
    width: '30vw'

}


export class Title extends React.Component {
    
    render() {
        return(
            <div>
                <div style={titleNameStyle}>suzuki kentaro</div>
                <div style={titleJobStyle}>technical sound designer</div>
            </div>
        );
    }

}