import React, {Component} from 'react';
import '../App.css';

class Logintoregister extends Component {
    render() {

        return (
            <div className="App">
       <h1>انتخاب کنید</h1>
        <button className="buttonStudent" onClick="ClickButton()"><span>دانشجو</span></button>
       
        <button className="buttonOstad" onClick="ClickButton()"><span>استاد</span></button>

            </div>
        );
    }
}

export default Logintoregister;