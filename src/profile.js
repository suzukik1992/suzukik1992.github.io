import React from 'react';
import { Biography } from './biography';
import me from './media/me_2.jpg';
import { Link} from './link';

const profileStyle = {
    backgroundImage: `url(${me})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    backgroundPosition: 'center top',
    height: 'calc(100vw / 1.9)',
    position: 'relative',
    top: '8vw '
};

export class Profile extends React.Component {
    
    render() {
        return(
            <div style={profileStyle}>
                <Biography />
                <Link />
            </div>
        )
    }

}