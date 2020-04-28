import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Menu from './Components/Menu';
import routes from './routes';

class App extends Component {

  showContentMenu = (routes) => {
    var result = null;
    if(routes.length > 0){
      result = routes.map((route, index) => {
        return ( 
          <Route key={index} path={route.path} exact={route.exact} component={route.main}/>
        )
      })
    }
    return result;
  }

  render() {
    return (
      <Router>
        <div>
          <Menu/>
          {/* Noi Dung */}
          <Switch >
            {this.showContentMenu(routes)}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

