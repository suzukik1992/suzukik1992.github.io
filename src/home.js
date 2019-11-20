import React from 'react';
import { Title } from './title'; 
import { Works } from './works';
import { Link } from './link';

const divWraper = {
  width: "100%"
}

export class Home extends React.Component {
    render() {
      return(
        <div style={divWraper}>
          <Title windowWidth={this.props.windowWidth}/>
          <Works windowWidth={this.props.windowWidth}/>
        </div>
      );
    }
  }
  