import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss'
import Home from './routes/Home';
import ProfilePage from './routes/ProfilePage';

// ReactDOM.render(
//   <Home />,
//   document.getElementById('root')
// );

ReactDOM.render(
  <ProfilePage />,
  document.getElementById('root')
);