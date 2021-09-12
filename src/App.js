import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import AdminLogin from './pages/admin/AdminLogin/AdminLogin';

function App() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="App">
      <Switch>
        <Route exact path="/" component={AdminLogin} />
      </Switch>
    </div>
  );
}

export default App;
