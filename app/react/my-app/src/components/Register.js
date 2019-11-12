
import React, {Component} from 'react';
import '../App.css';

class Register extends Component {
  
  render() {
    return (
    <div className="App">
      <div className="registerbox">
        <h2>ثبت نام</h2>
        <p>_______________________________________________________</p>
        <form>
          <p>نام</p>
          <input type="text" name="" placeholder="Enter Username"></input>
          <p> نام خانوادگی</p>
          <input type="text" name="" placeholder="Enter Username"></input>
          <p>شماره دانشجویی</p>
          <input type="text" name="" placeholder="Enter Student Number"></input>
          <p>ایمیل</p>
          <input type="text" name="" placeholder="Enter Email"></input>
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
