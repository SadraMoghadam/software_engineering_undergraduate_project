
import React, {Component} from 'react';
import '../App.css';

class RegisterOstad extends Component {
  
  render() {
    return (
    <div className="App">
      <div className="registerOstadbox">
        <h2>ثبت نام استاد</h2>
       
        <form>
        <p>نام</p>
          <input type="text" name="" placeholder="نام خود را وارد کنید"></input>
          <p>نام خانوادگی</p>
          <input type="text" name="" placeholder="نام خانوادگی را وارد کنید"></input>
          <p>شماره پرسنلی</p>
          <input type="text" name="" placeholder="شماره پرسنلی خود را وارد کنید"></input>
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

export default RegisterOstad;
