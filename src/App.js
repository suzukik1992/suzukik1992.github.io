import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Home } from './home'; 
import { WorkPages　} from './workPages';
import { About } from './about';
import { Title } from './title';
import { maxWindowWidth } from './style'

document.body.style = 'background: black;';

const divWraper = {
  position: "relative",
  maxWidth: maxWindowWidth + "px",
  margin: "auto"

}

export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth
    }
    this.updateWidth = this.updateWidth.bind(this);
  }

  updateWidth() {
    let width = window.innerWidth > maxWindowWidth ? maxWindowWidth: window.innerWidth;
    this.setState({
      windowWidth: width
    })
  }

  componentWillMount() {
    this.updateWidth();
  }

  componentDidMount() {
    window.onresize = this.updateWidth;
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  render() {

    return(
        <Router basename='/'>
        <div style={divWraper}>
          <Switch>
            <Route path="/works/:work" render={({match}) => <WorkPages windowWidth={this.state.windowWidth} match={match}/>} />
            <Route path="/about" render={() => <About windowWidth={this.state.windowWidth} />} />
            <Route path="/" render={() => <Home windowWidth={this.state.windowWidth} />} />
          </Switch>
        </div>
        </Router>
    );
  }
}


