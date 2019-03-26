import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Switch, HashRouter} from 'react-router-dom';
import Header from './Header';
import Home from './home';
import Edit from './Edit';
import Create from './Create';
import character from './character';


class App extends Component {
    render() {
      return (
        <HashRouter>
          <div>
            <Header/>
             <Switch>
               <Route exact path ='/' component={Home}/>
               <Route exact path ='/Edit/:id' component={Edit}/>
               <Route exact path='/Create' component={Create}/>
               <Route exact path='/character/:id' component={character}/>
              
             </Switch>
          </div>

        </HashRouter>
      )
    }
}

export default App;