import React from 'react';
import { Title } from './title'; 
import { Profile } from './profile';
import { Works } from './works';

export class About extends React.Component {

    render() {
      return(
        <div>
          <Title />
          <Profile />
        </div>
      );
    }
  }