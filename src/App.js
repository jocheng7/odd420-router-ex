import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import {Row, Column} from './components/layout/layoutComponents';
import {Link, Switch, Route} from 'react-router-dom';
import {MemoryRouter} from 'react-router';
import {PageOne} from './components/page1';
import {PageTwo} from './components/page2';
import {ProtectPage} from './components/protectedpge'
import {PageThree} from './components/page3'

const ProtectedRoute = ({component:Component}, isAuthenticated) => (
      <Route render={props =>(
       isAuthenticated ? (<Component />) :(<ProtectPage />)
      ) }  />
  )

class App extends Component {
  render() {
    return (
      <div className="App">
      <MemoryRouter>
      
      <Column>
       <Row>
       <Link to="/one">Link One</Link>
       <Link to="/two">Link Two</Link>       
       <Link to="/three">Link Three</Link>     
       
       </Row>
       <div>
       <Switch>
        <Route path="/one" component={PageOne} />
         <Route path="/two" component={PageTwo} /> 
         <ProtectedRoute path="/three" component={PageThree} />
       </Switch>
       </div>
       </Column>
       </MemoryRouter>
      </div>
    );
  }
}

export default App;
