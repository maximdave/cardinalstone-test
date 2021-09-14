import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import AdminLogin from './pages/admin/AdminLogin/AdminLogin';
import AdminPage from './pages/admin/AdminPage/AdminPage';
import CreateUser from './pages/admin/CreateUser/CreateUser';

function App() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="App">
      <Switch>
        <Route exact path="/" component={AdminLogin} />
        <Route path="/admin-page" component={AdminPage} />
        <Route path="/create-user" component={CreateUser} />
      </Switch>
    </div>
  );
}

export default App;
