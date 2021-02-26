import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './styles/default_css/reset.css'
import './styles/default_css/main.css'
import PrivateRoute from './routes/ProfilePage/';
import Home from './routes/Home';
import ProfilePage from './routes/ProfilePage/ProfilePage';
import { AuthProvider } from './contexts/AuthContext';
import { ModalProvider } from './contexts/ModalContext';

function Index() {
  return (
    <Router>
      <ModalProvider>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path='/' component={ProfilePage} />
            <Route exact path="/home" component={Home}/>
          </Switch>
        </AuthProvider>
      </ModalProvider>
    </Router>
  )
}

ReactDOM.render(
  <Index />, document.getElementById('root')
);
