
import React, {Component} from 'react';
import '../newCss.css';
import News from './Layout/News';

import Header from './Header';

class Test extends Component {
    render() {
        return(
            <div className="Home">
            <Header/>
            <div className="Test">
                <button>sssssss</button>
            </div>
            </div>
        );
    }
}

export default Test;