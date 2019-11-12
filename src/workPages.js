import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Title } from './title';
import { WorkContent} from './workContent';

const workPagesStyle = {
    position: 'absolute',
    top: '5.5vw'
}

export class WorkPages extends React.Component {

    render(props) {

        let title = this.props.match.params.work;
        return(
            <div>
                <Link to='' style={{textDecoration: "none"}}><Title /></Link>
                <div style={workPagesStyle}>
                    <WorkContent workTitle={title } />
                </div>
            </div>
        );
    }
}