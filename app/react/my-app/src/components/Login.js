
import logo from '../ostadrate.png';
import React, {Component} from 'react';
import '../App.css';
import Register from './Register';
import Logintoregister from './Logintoregister';


class Login extends Component {
   ClickButton =() => {
    return(
        <Logintoregister/>
    )
}


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
    
    <div className="loginbox">
        <h2>ورود</h2>
        <form>
          <p>نام کاربری</p>
          <input type="text" name="" placeholder="شماره دانشجویی"></input>
          <p>رمز عبور</p>
          <input type="password" name="" placeholder="**********"></input>
          <input type="submit" name="" value="ورود"></input>
        </form>
    </div>
        <button className="button" onClick={this.ClickButton}><span>ثبت نام</span></button>
        </div>
    );
  }
}

export default Login;