import React from 'react';
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import Logintoregister from './components/Logintoregister';
import RegisterOstad from './components/RegisterOstad';
import ProfessorRate from './components/ProfessorRate';
import UniversityRate from './components/UniversityRate';
import Addpage from './components/Addpage';
import Test from './components/Test';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import CommentForm from './components/Layout/Comment';

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
        <Route exact path="/Comment" component={CommentForm}/>
        <Route exact path="/Addpage" component={Addpage}/>
        <Route exact path="/Test" component={Test}/>
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