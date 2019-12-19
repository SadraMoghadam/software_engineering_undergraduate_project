import React, {Component} from 'react';
import '../App.css';
import '../plusCss.css';
import Header from './Header';
import { Redirect } from 'react-router-dom';

class Addpage extends React.Component{
   render(){
       return(

<div>
<Header/>

        <div className="allback">
        <div className="addUnibtn"><a className="bt more-bt" href="javascript:void(0)">
         <span className="fl"></span><span className="sfl"></span><span className = "cross"></span>
          <i></i><p>دانشگاه</p></a></div>

          <div className="addOstadbtn"><a className="bt more-bt" href="javascript:void(0)">
         <span className="fl"></span><span className="sfl"></span><span className = "cross"></span>
          <i></i><p>استاد</p></a></div>
           </div>   
</div>



       );
   }
}

export default Addpage;