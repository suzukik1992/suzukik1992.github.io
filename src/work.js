import React from 'react';
import { maxWindowWidth } from './style.js'

const divStyle = {
    position: 'relative'
}

const imgStyle = {
    transition: 'all 0.3s ease-out',
    objectFit: "cover"
}

const titleStyle = {
    transition: 'all 0.3s ease-out',
    width: "100%",
    height: "50%",
    margin: "0",
    padding: "0",
    bottom: "50%",
    textAlign: "center",
    position: "relative",
    fontFamily: 'Montserrat, sans-serif',
    color: "white"
}

export class Work extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            opacity: 0,
            img: "blur(0px) saturate(100%) brightness(100%)"
        }
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    handleMouseEnter(e) {
        this.setState({
           opacity: 1,
           img: "blur(3px) saturate(500%) brightness(50%)"
        })
    }

    handleMouseLeave(e) {
        this.setState({
            opacity: 0,
            img: "blur(0px) saturate(100%) brightness(100%)"
         })
     }

    render() {
        let windowWidth = this.props.windowWidth
        let divWidth = "33.333vw";
        let divHeight = divWidth;
        let imgFontSize = '2vw';

        // over maxWidth ios
        if(windowWidth === maxWindowWidth) {
            divWidth = windowWidth/3;
            divHeight = divWidth;
            imgFontSize = windowWidth/50;
        }

        return(
            <div style={{...divStyle, width:divWidth, height:divHeight}} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                <img src={this.props.src} style={{...imgStyle, filter:this.state.img, width:divWidth, height:divHeight}} alt=""/>
                <p style={{...titleStyle, opacity:this.state.opacity, fontSize:imgFontSize}}>{this.props.title}</p>
            </div>
        );
    }
}