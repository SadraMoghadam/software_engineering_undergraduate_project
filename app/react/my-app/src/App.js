import React from 'react';
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import Logintoregister from './components/Logintoregister';
import RegisterOstad from './components/RegisterOstad';
import ProfessorRate from './components/ProfessorRate';
import UniversityRate from './components/UniversityRate';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";

function App() {
  
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Login" component={Login}/>
        <Route exact path="/Logintoregister" component={Logintoregister}/>
        <Route exact path="/Register" component={Register}/>
        <Route exact path="/RegisterOstad" component={RegisterOstad}/>
        <Route exact path="/ProfessorRate" component={ProfessorRate}/>
        <Route exact path="/UniversityRate" component={UniversityRate}/>
      </Switch>
    </Router>
    
  );
}

export default App;


//<Router>
//      <Switch>
//        <Route exact path="/" ><Login /></Route>
//        <Route path="/Logintoregister"><Logintoregister /></Route>
//        <Switch>
//        <Route path="/Logintoregister/Register"><Register /></Route>
//        <Route path="/Logintoregister/RegisterOstad"><RegisterOstad /></Route>
//        </Switch>
//        
//      </Switch>
//    </Router>