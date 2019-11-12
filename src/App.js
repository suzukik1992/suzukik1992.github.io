import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Home } from './home'; 
import { WorkPages　} from './workPages'

document.body.style = 'background: black;';

export class App extends React.Component {

  render() {
    
    return(
        <Router>
        <div>
          <Switch>
            <Route exact path="/works/:work" component={WorkPages}></Route>
            <Route path="" component={Home}></Route>
          </Switch>
        </div>
        </Router>
    );
  }
}


