import React from 'react';
import { Title } from './title'; 
import { Profile } from './profile';
import { Works } from './works';

export class Home extends React.Component {

    render() {
      return(
        <div>
          <Title />
          <Profile />
          <Works />
        </div>
      );
    }
  }
  