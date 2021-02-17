import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './styles/reset.css'
import './styles/main.css'
import PrivateRoute from './routes/ProfilePage/';
import Home from './routes/Home';
import ProfilePage from './routes/ProfilePage/ProfilePage';
import { AuthProvider } from './contexts/AuthContext';

function Index() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path='/' component={ProfilePage} />
          <Route exact path='/home' component={Home} />
        </Switch>
      </AuthProvider>
    </Router>
  )
}

ReactDOM.render(
  <Index />, document.getElementById('root')
);
