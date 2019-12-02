import React, {Component} from 'react';
import logo from '../ostadrate.png';
import '../App.css';

class Logintoregister extends Component {
    render() {

        return (
            <div className="App">
                <img src= {logo} className="userr"></img>
                <div className="sidebar">
                    <a href="#home">صفحه اصلی</a>
                    <a href="#news">اخبار</a>
                    <a href="#contact">تماس با ما</a>
                    <a href="#about">درباره سایت</a>
                </div>
                 <form className="searchBar">
                     <input type = "text" name = "search" placeholder = "استاد یا دانشگاه مورد نظر خود را جستجو کنید"></input>
                 </form>
             <h1>انتخاب کنید</h1>
        <button className="buttonStudent" onClick="ClickButton()"><span>دانشجو</span></button>
        <button className="buttonOstad" onClick="ClickButton()"><span>استاد</span></button>
            </div>
        );
    }
}

export default Logintoregister;