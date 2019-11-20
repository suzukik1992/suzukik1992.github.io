import React from 'react';
import { Link } from 'react-router-dom';
import { myColor, maxWindowWidth } from './style.js'

const divWraper = {

    width: "100%"
}

const titleNameStyle = {

    fontFamily: 'Montserrat, sans-serif',
    height: '100%',
    position: "absolute",
    textAlign: 'left',
    color: myColor.purple,
    verticalAlign: "baseline",
    paddingLeft: '1%',
    paddingTop: '2%'
    

};

const aboutStyle = {

    fontFamily: 'Montserrat, sans-serif',
    height: '100%',
    position: "absolute",
    textAlign: 'right',
    color: myColor.purple,
    verticalAlign: "baseline",
    right: '0',
    paddingRight: '1%',
    paddingTop: '4%'

};


export class Title extends React.Component {
    
    render() {

        let windowWidth = this.props.windowWidth;
        let nameFontsize = "5vw";
        let aboutFontsize = "3.333vw";
        let divWraperHeight = "10vw";

        // over maxWidth ios
        if(windowWidth === maxWindowWidth) {
            nameFontsize = windowWidth/20;
            aboutFontsize = windowWidth/30;
            divWraperHeight = windowWidth/10;
        } 

        return(
            <div style={{...divWraper, height:divWraperHeight}}>
                <Link to='/' style={{textDecoration: "none"}}><div style={{...titleNameStyle, fontSize: nameFontsize, height:divWraperHeight}}>suzuki kentaro</div></Link>
                <Link to='/about' style={{textDecoration: "none"}}><div style={{...aboutStyle, fontSize:aboutFontsize, height:divWraperHeight}}>about</div></Link>
            </div>
        );
    }

}