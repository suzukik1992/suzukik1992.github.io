import React from 'react';
import { Biography } from './biography';
import me from './media/me_2.jpg';
import { Link } from './link';
import { myColor, maxWindowWidth } from './style'

const divWraper = {
    width: "100%"
}

const profileStyle = {
    backgroundImage: `url(${me})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    position: 'relative'
};

const jobStyle = {
    fontFamily: 'MontserratBold, sans-serif',
    textAlign: 'center',
    margin: 'auto',
    height: '100%',
    paddingTop: '2.5%',
    color: myColor.yellow
}

export class Profile extends React.Component {
    
    render() {
        let windowWidth = this.props.windowWidth;
        let jobFontSize = "2.5vw";
        let jobHeight = 100/38 + "vw";
        let divHeight = "50vw";

        // over maxWidth ios
        if(windowWidth === maxWindowWidth) {
            jobFontSize = windowWidth/40;
            jobHeight = windowWidth/38;
            divHeight = windowWidth/2;
        }

        return(
            <div style={divWraper}>
                <div style={{...profileStyle, height:divHeight}}>
                    <Biography windowWidth={this.props.windowWidth}/>
                </div>
                <div style={{...jobStyle, fontSize:jobFontSize, height:jobHeight}}>Sound Designer / Sound Programmer</div>
                <Link windowWidth={this.props.windowWidth}/>
            </div>
        )
    }

}