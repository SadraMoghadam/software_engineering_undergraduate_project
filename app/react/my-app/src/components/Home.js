import logo from '../ostadrate.png';
import React, {Component} from 'react';
import '../newCss.css';
import Register from './Register';
import Header from './Header';
import Logintoregister from './Logintoregister';
import { Redirect } from 'react-router-dom';

class Home extends Component {
    render() {
        return(
            <div className="Home">
                <Header/>
                <div className="allBackground">
                </div>
            </div>
        );
    }
}

export default Home;