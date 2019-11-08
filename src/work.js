import React from 'react';

const imgStyle = {
    width: "33.333vw",
    height: "33.333vw",
    objectFit: "cover",
}

export class Work extends React.Component {
    render() {
        return(
            <div>
                <img src={this.props.src} style={imgStyle} alt=""/>
            </div>
        );
    }
}