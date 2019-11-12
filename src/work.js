import React from 'react';

const divStyle = {
    height: "33.333vw",
    width: "33.333vw",
    position: 'relative'
}

const imgStyle = {
    transition: 'all 0.3s ease-out',
    width: "100%",
    height: "100%",
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
    fontSize: "1.75vw",
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
        return(
            <div style={divStyle} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                <img src={this.props.src} style={{...imgStyle, filter:this.state.img}} alt=""/>
                <p style={{...titleStyle, opacity:this.state.opacity}}>{this.props.title}</p>
            </div>
        );
    }
}