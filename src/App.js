import React from 'react';
import { SignIn, SignUp, Cabinet } from "./components/pages";
import { HeaderBlock, FooterBlock} from './components/blocks';
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import { getUserData } from './services/localStorageService';
import './components/styles/index.scss';
function App() {
  const {userId, token} =  getUserData();
  console.log(getUserData());
  return (
    <div className="app">
        <HeaderBlock/>
          <Router>
              <Switch>
                  <Route path="/sign_in"  component={SignIn}/>
                  <Route path="/sign_up" component={SignUp}/>
                  <Route path="/cabinet" component={Cabinet}/>
                  <Route path="/"><Redirect to="/sign_in"/></Route>
                  {!userId && !token ? <Redirect to="/sign_in"/> : <Redirect to="/cabinet"/> }
                </Switch>
          </Router>
        <FooterBlock/>
    </div>
  );
}

export default App;
