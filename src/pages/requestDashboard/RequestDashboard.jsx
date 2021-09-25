import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NameBar from '../../components/requestComponents/general/NameBar';
import Overview from '../../components/requestComponents/secretary/Overview';
import Navbar from '../../components/requestComponents/secretary/Navbar';

import './RequestDashboard.css';
import Requests from './requestTypes/Requests';

const RequestDashboard = () => (
  <div className="secretary_dashboard">
    <Router>
      <Navbar />
      <div className="dashboard_section">
        <NameBar name="Jones" title="Jones Ferdinand" />
        <div className="dashboard_view">
          <Switch>
            <Route path="/overview" component={Overview} />
            <Route path="/requests" component={Requests} />
          </Switch>
        </div>
      </div>
    </Router>
  </div>
);

export default RequestDashboard;
