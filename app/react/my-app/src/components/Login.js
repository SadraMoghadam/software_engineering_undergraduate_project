
import logo from '../ostadrate.png';
import React, {Component} from 'react';
import '../App.css';
import Register from './Register';

function ClickButton() {
    return(
        <Register/>
    )
}

class Login extends Component {


  render() {
    return (
    <div className="App">
      <h1>! خوش آمدید </h1>
        <div className="loginbox">
        <img src= {logo} className="user"></img>
        <h2>ورود</h2>
        <p>_______________________________________________________</p>
        <form>
          <p>نام کاربری</p>
          <input type="text" name="" placeholder="Enter Username"></input>
          <p>رمز عبور</p>
          <input type="password" name="" placeholder="**********"></input>
          <input type="submit" name="" value="ورود"></input>
          <a href="#">فراموشی رمز؟</a>
          <p> _______________________________________________________ </p>
          <a>اکانتی ندارید ؟</a>
          <p></p>
          <a>!ثبت نام کنید </a>
        </form>
        </div>
        <button className="button" onClick="ClickButton"><span>ثبت نام</span></button>
       
        </div>
    );
  }
}

export default Login;
