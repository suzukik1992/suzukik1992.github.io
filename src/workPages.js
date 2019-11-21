import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Title } from './title';
import { WorkContent} from './workContent';


const divWraper = {
    width: "100%"
  }

const workPagesStyle = {
    width: "100%",
    position: "relative"
}

export class WorkPages extends React.Component {

    componentDidMount() {
        window.scroll(0, 0);
        console.log("scrolled");
    }

    render(props) {

        let title = this.props.match.params.work;
        return(
            <div style={divWraper}>
                <Title windowWidth={this.props.windowWidth}/>
                <div style={workPagesStyle}>
                    <WorkContent workTitle={title} windowWidth={this.props.windowWidth}/>
                </div>
            </div>
        );
    }
}