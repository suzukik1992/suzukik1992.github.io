import React from 'react';
import { myColor, maxWindowWidth } from './style.js';
import { TwitterIcon, YoutubeIcon, ShopIcon, MailIcon } from './svgLinkIcons';

const ulStyle = {

    paddingLeft: '26%',
    margin: '0'

}

const liStyle = {

    display: 'inline',
    height: '100%',
    marginTop: '0',
    marginBottom: '0',
    padding: '0'

}

export class Link extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            twitterColor: "white",
            youtubeColor: "white",
            shopColor: "white",
            mailColor: "white"
        }
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    handleMouseEnter(e) {
        let targetID = e.target.id + "Color";
        this.setState({
           [targetID]: myColor.yellow
        })
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
    }

    render() {

        let windowWidth = this.props.windowWidth;
        let svgRatio = scale(windowWidth, [0, 1000], [0, 2.2]);
        let liMarginRight = 100/7 + "vw";
        let ulPosition = "2.5vw";
        let ulHeight = "10vw";

        // over maxWidth ios
        if(windowWidth === maxWindowWidth) {
            svgRatio = scale(maxWindowWidth, [0, 1000], [0, 2.2]);
            liMarginRight = windowWidth/7;
            ulPosition = windowWidth/40;
            ulHeight = windowWidth/10;
        }
        svgRatio = Math.max(svgRatio, 0.65);
        let svgScaleFormat = `scale(${svgRatio}, ${svgRatio})`;

        return(
            <ul style={{...ulStyle, paddingTop:ulPosition, height:ulHeight}}>

                <li style={{...liStyle, marginRight:liMarginRight}}>
                    <TwitterIcon scale={svgScaleFormat} color={this.state.twitterColor} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}/>
                </li>

                <li style={{...liStyle, marginRight:liMarginRight}}>
                    <YoutubeIcon scale={svgScaleFormat} color={this.state.youtubeColor} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}/>
                </li>

                <li style={{...liStyle, marginRight:liMarginRight}}>
                    <ShopIcon scale={svgScaleFormat} color={this.state.shopColor} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}/>
                </li>

                <li style={{...liStyle, marginRight:liMarginRight}}>
                     <MailIcon scale={svgScaleFormat} color={this.state.mailColor} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}/>
                </li>

            </ul>
        );
    }
}

function scale( value, r1, r2 ) { 
    return ( value - r1[ 0 ] ) * ( r2[ 1 ] - r2[ 0 ] ) / ( r1[ 1 ] - r1[ 0 ] ) + r2[ 0 ];
}