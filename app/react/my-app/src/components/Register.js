
import React, {Component} from 'react';
import '../App.css';

class Register extends Component {
  
  render() {
    return (
    <div className="App">
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
