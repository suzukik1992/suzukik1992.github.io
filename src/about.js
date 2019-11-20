import React from 'react';
import { Title } from './title'; 
import { Profile } from './profile';

const divWraper = {
  width: "100%"
}

export class About extends React.Component {

    render() {
      return(
        <div style={divWraper}>
          <Title windowWidth={this.props.windowWidth}/>
          <Profile windowWidth={this.props.windowWidth}/>
        </div>
      );
    }
  }