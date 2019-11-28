
import React, {Component} from 'react';
import logo from '../ostadrate.png';

import '../App.css';

class Register extends Component {
  
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
      <div className="registerbox">
        <h2>ثبت نام دانشجو</h2>
        
        <form>
          <p>شماره دانشجویی</p>
          <input type="text" name="" placeholder="شماره دانشجویی خود را وارد کنید"></input>
          <p>ایمیل</p>
          <input type="text" name="" placeholder="ایمیل خود را وارد کنید"></input>
          <p>رمز عبور</p>
          <input type="password" name="" placeholder="**********"></input>
          <p>تایید رمز عبور</p>
          <input type="password" name="" placeholder="**********"></input>
          <input type="submit" name="" value="تایید"></input>
        </form>
        </div> 
       
        </div>
    );
  }
}

export default Register;
