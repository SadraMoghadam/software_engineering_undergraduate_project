
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
      <h1>! خوش آمدید </h1>
        <div className="loginbox">
        <img src= {logo} className="user"></img>
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
