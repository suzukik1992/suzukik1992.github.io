import React from 'react';
import { myColor } from './style.js';
import { TwitterIcon, YoutubeIcon, ShopIcon, MailIcon } from './svgLinkIcons';

const ulStyle = {

    position: "absolute",
    right: "1.5vw",
    top: '48vw',
    width: '28vw',
    height: '5vw',
    padding: '0',
    margin: '0',

}

const liStyle = {

    display: 'inline',
    height: '100%',
    marginRight: '7vw',
    marginTop: '0',
    marginBottom: '0',
    padding: '0'

}

export class Link extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            width: "0",
            height: "0",
            twitterColor: "white",
            youtubeColor: "white",
            shopColor: "white",
            mailColor: "white"
        }
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.updateDimentions = this.updateDimentions.bind(this);
    }

    updateDimentions() {
        let windowWidth = window.innerWidth;
        let windowHeight = window.innerHeight;
        this.setState({
            width: windowWidth,
            height: windowHeight
        })
    }

    componentWillMount() {
        this.updateDimentions();
    }

    componentDidMount() {
        window.onresize = this.updateDimentions;
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimentions);
    }

    handleMouseEnter(e) {
        let targetID = e.target.id + "Color";
        this.setState({
           [targetID]: myColor.yellow
        })
        //console.log("Enter:", targetID);
    }

    handleMouseLeave(e) {
        let targetID = e.target.id + "Color";
        if(targetID === "Color") {
            this.setState({
                twitterColor: "white",
                youtubeColor: "white",
                shopColor: "white",
                mailColor: "white"
            })
        } else {
            this.setState({
                [targetID]: myColor.white
            })
        }
        //console.log("Leave:", targetID, e);
    }

    render() {

        let svgRatio = scale(this.state.width, [0, 1000], [0, 1.85]);
        let svgScaleFormat = `scale(${svgRatio}, ${svgRatio})`;

        return(
            <ul style={ulStyle}>

                <li style={liStyle}>
                    <TwitterIcon scale={svgScaleFormat} color={this.state.twitterColor} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}/>
                </li>

                <li style={liStyle}>
                    <YoutubeIcon scale={svgScaleFormat} color={this.state.youtubeColor} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}/>
                </li>

                <li style={liStyle}>
                    <ShopIcon scale={svgScaleFormat} color={this.state.shopColor} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}/>
                </li>

                <li style={liStyle}>
                     <MailIcon scale={svgScaleFormat} color={this.state.mailColor} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}/>
                </li>

            </ul>
        );
    }
}

function scale( value, r1, r2 ) { 
    return ( value - r1[ 0 ] ) * ( r2[ 1 ] - r2[ 0 ] ) / ( r1[ 1 ] - r1[ 0 ] ) + r2[ 0 ];
}