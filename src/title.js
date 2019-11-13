import React from 'react';
import { Link } from 'react-router-dom';
import { myColor } from './style.js'

const titleNameStyle = {

    fontSize: "3vw",
    fontFamily: 'MontserratBold, sans-serif',
    position: "absolute",
    paddingLeft: '1.5vw',
    paddingTop: '0.5vw',
    textAlign: 'left',
    color: myColor.purple

};

const aboutStyle = {

    fontSize: "3vw",
    fontFamily: 'Montserrat, sans-serif',
    position: "absolute",
    right: '1.5vw',
    paddingLeft: '1.5vw',
    paddingTop: '0.5vw',
    textAlign: 'right',
    color: myColor.purple

};

/*
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
*/

export class Title extends React.Component {
    
    render() {
        return(
            <div>
                <Link to='/' style={{textDecoration: "none"}}><div style={titleNameStyle}>suzuki kentaro</div></Link>
                <Link to='/about' style={{textDecoration: "none"}}><div style={aboutStyle}>about</div></Link>
            </div>
        );
    }

}