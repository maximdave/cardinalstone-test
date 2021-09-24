import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import AdminLogin from './pages/admin/AdminLogin/AdminLogin';
import AdminPage from './pages/admin/AdminPage/AdminPage';
import CreateUser from './pages/admin/CreateUser/CreateUser';
import CreateUserSuccess from './pages/admin/CreateUserSuccess/CreateUserSuccess';
import ManageUsers from './pages/admin/ManageUsers/ManageUsers';
import EditRequest from './pages/admin/EditRequest/EditRequest';
import CreateSockbroker from './pages/admin/CreateSockbroker/CreateSockbroker';
import UpdateRequirement from './pages/admin/UpdateRequirement/UpdateRequirement';
import StockbrokerLogin from './pages/admin/StockbrokerLogin/StockbrokerLogin';
import ChangePassword from './pages/admin/ChangePassword/ChangePassword';
import Subscription from './pages/admin/Subscription/Subscription';
import ChoosePayment from './pages/admin/ChoosePayment/ChoosePayment';
import IndemnityAgreement from './pages/admin/IndemnityAgreement/IndemnityAgreement';
import RequestDashboard from './pages/requestDashboard/RequestDashboard';

function App() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="App">
      <Switch>
        <Route exact path="/" component={AdminLogin} />
        <Route path="/admin-page" component={AdminPage} />
        <Route path="/create-user" component={CreateUser} />
        <Route path="/create-user-success" component={CreateUserSuccess} />
        <Route path="/manage-users" component={ManageUsers} />
        <Route path="/edit-request" component={EditRequest} />
        <Route path="/create-stockbroker" component={CreateSockbroker} />
        <Route path="/update-requirement" component={UpdateRequirement} />
        <Route path="/stockbroker-login" component={StockbrokerLogin} />
        <Route path="/change-password" component={ChangePassword} />
        <Route path="/subscription" component={Subscription} />
        <Route path="/choose-payment" component={ChoosePayment} />
        <Route path="/indemnity-agreement" component={IndemnityAgreement} />
        <Route path="/requestDashboard" component={RequestDashboard} />
      </Switch>
    </div>
  );
}

export default App;
