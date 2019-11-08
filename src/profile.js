import React from 'react';
import { Title } from './title';
import { Biography } from './biography';
import me from './media/me.jpg';
import { Link} from './link';

const profileStyle = {

    backgroundImage: `url(${me})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    backgroundPosition: 'center top',
    height: 'calc(100vw / 1.55)'

};

export class Profile extends React.Component {
    
    render() {
        return(
            <div style={profileStyle}>
               <Title />
               <Biography />
               <Link />
            </div>
        )
    }

}