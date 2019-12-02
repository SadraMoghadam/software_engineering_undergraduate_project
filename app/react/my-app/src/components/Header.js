import logo from '../ostadrate.png';
import React, {Component} from 'react';
import '../newCss.css';
import '../App.css'
import Login from './Login';
import { Redirect } from 'react-router-dom';

class Header extends Component {
    state = {
        redirectLoginReg: false
      } 
    
        setRedirectLoginReg = () => {
          this.setState({
            redirectLoginReg: true
          })
        }

        renderRedirectLoginReg = () => {
          if (this.state.redirectLoginReg) {
            return <Redirect to='./Login' />
          }
        }


    render() {
        return(
        <div className="header">
            <img src= {logo} className="image"></img>
            <div className="loginRegButton" onClick={this.setRedirectLoginReg}>
            {this.renderRedirectLoginReg()}
                ورود / ثبت نام
            </div>
            <form className="searchBar">
                <input type = "text" name = "search" placeholder = "استاد یا دانشگاه مورد نظر خود را جستجو کنید"></input>
            </form>
        </div>);
    }
}

export default Header;