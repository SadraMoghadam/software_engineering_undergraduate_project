
import React, {Component} from 'react';
import '../newCss.css';
import Header from './Header';
import { Redirect } from 'react-router-dom';

class Home extends Component {

    state = {
        redirectProfessorRate: false,
        redirectUniRate: false
      } 
    
        setRedirectProfessorRate = () => {
          this.setState({
            redirectProfessorRate: true
          })
        }

        renderRedirectProfessorRate = () => {
          if (this.state.redirectProfessorRate) {
            return <Redirect to='./ProfessorRate' />
          }
        }

        setRedirectUniRate = () => {
            this.setState({
              redirectUniRate: true
            })
          }
  
          renderRedirectUniRate = () => {
            if (this.state.redirectUniRate) {
              return <Redirect to='./UniversityRate' />
            }
          }

    render() {
        return(
            <div className="Home">
                <Header/>
                <div className="allBackground">
                <div className="rateButton" onClick={this.setRedirectProfessorRate}>
                    {this.renderRedirectProfessorRate()}
                    امتیازدهی استاد
                </div>
                <div className="rateButton" onClick={this.setRedirectUniRate}>
                    {this.renderRedirectUniRate()}
                    امتیازدهی دانشگاه
                </div>
                </div>
            </div>
            
        );
    }
}

export default Home;