import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NameBar from "../../components/requestComponents/general/NameBar";
import Navbar from "../../components/stockrequest/Navbar";
import Overview from "../../components/stockrequest/Overview";

import "./stockbrokerDashboard.css";
import Requests from "./requestTypes/Requests";
import ForgotPassword from "../admin/ForgotPassword/ForgotPassword";

const StockbrokerDashboard = () => (
  <div className="secretary_dashboard">
    <Router>
      <Navbar />
      <div className="dashboard_section">
        <NameBar name="Jones" title="Jones Ferdinand" />
        <div className="dashboard_view2">
          <Switch>
            <Route path="/stockbroker/overview" component={Overview} />
            <Route path="/stockbroker/requests" component={Requests} />
            <Route path="/forgotpass" component={ForgotPassword} />
          </Switch>
        </div>
      </div>
    </Router>
  </div>
);

export default StockbrokerDashboard;
