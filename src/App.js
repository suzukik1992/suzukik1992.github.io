import React from 'react';
import { Profile } from './profile';
import { Border } from './border';
import { Works } from './works';


export class App extends React.Component {

  render() {
    
    return(
      <div>
        <Profile />
        <Border />
        <Works />
      </div>
    );
  }
}

