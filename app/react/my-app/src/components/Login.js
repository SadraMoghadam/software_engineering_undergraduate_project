
import logo from '../ostadrate.png';
import React, {Component} from 'react';
import '../App.css';
import Register from './Register';
import Logintoregister from './Logintoregister';
import { Redirect } from 'react-router-dom'


class Login extends Component {
  state = {
    redirect: false
  } 

    setRedirect = () => {
      this.setState({
        redirect: true
      })
    }
    renderRedirect = () => {
      if (this.state.redirect) {
        return <Redirect to='/Logintoregister' />
      }
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
    <div>
        {this.renderRedirect()}
        <button className="button" onClick={this.setRedirect}><span>ثبت نام</span></button>
    </div>
        </div>
    );
  }
}

export default Login;