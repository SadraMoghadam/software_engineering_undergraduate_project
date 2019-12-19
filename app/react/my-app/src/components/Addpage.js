import React, {Component} from 'react';
import '../App.css';
import '../plusCss.css';
import Header from './Header';
import { Redirect } from 'react-router-dom';

class Addpage extends React.Component{

     ShowAddUniversityForm = () => {
        var x = document.getElementById("myDIV");
        if (window.getComputedStyle(x).visibility === "hidden") {
          x.style.visibility = "visible";
        }
      }

      ShowAddOstadForm = () => {
        var y = document.getElementById("myDIV2");
        if (window.getComputedStyle(y).visibility === "hidden") {
            y.style.visibility = "visible";
          }
      }

   render(){
       return(
<div>
<Header/>

        <div className="allback">
        <div className="addUnibtn">
            <button onClick={this.ShowAddUniversityForm} className="bt more-bt" href="javascript:void(0)">
         <span className="fl"></span><span className="sfl"></span>
         <span className = "cross"></span>
          <i></i><p>دانشگاه</p>
            </button>
            <div id="myDIV">
                <p>اضافه کردن دانشگاه</p>
            <form>
          <p>نام دانشگاه</p>
          <input type="text" name="" placeholder="نام دانشگاه را وارد کنید"></input>
          <input type="submit" name="" value="تایید"></input>
        </form>
        </div>
            </div>

          <div className="addOstadbtn">
              <button onClick={this.ShowAddOstadForm} className="bt more-bt"  href="javascript:void(0)">
         <span className="fl"></span><span className="sfl"></span><span className = "cross"></span>
          <i></i><p>استاد</p>
          </button>
          <div id="myDIV2">
                <p>اضافه کردن استاد</p>
            <form>
          <p>نام استاد</p>
          <input type="text" name="" placeholder="نام استاد را وارد کنید"></input>
          <p>سایر اطلاعات</p>
          <input type="text" name="" placeholder="سایر اطلاعات استاد را وارد کنید"></input>
          <input type="submit" name="" value="تایید"></input>
        </form>
        </div>
        </div>
           </div>   
        
</div>
       );
   }
}

export default Addpage;