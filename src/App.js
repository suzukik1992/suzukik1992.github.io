import React from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Home } from './home'; 
import { WorkPages　} from './workPages';
import { About } from './about';

document.body.style = 'background: black;';

export class App extends React.Component {

  render() {
    
    return(
        <Router basename='/'>
        <div>
          <Switch>
            <Route exact path="/works/:work" component={WorkPages}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route path="/" component={Home}></Route>
          </Switch>
        </div>
        </Router>
    );
  }
}


