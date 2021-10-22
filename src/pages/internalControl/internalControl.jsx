import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NameBar from "../../components/requestComponents/general/NameBar";
import Navbar from "./Navbar";
import Overview from "./overview/Overview";

import "./verification.css";
import Requests from "./requestTypes/Requests";
import ForgotPassword from "../admin/ForgotPassword/ForgotPassword";
import ReverseLodge from "./ReverseLodge";
import Reports from "./Report";
import ApprovedCallover from "./ApprovedCallover";
import RejectedCallover from "./RejectedCallover";

const InternalControlUnit = () => (
  <div className="secretary_dashboard">
    <Router>
      <Navbar />
      <div className="dashboard_section">
        <NameBar name="Jones" title="Jones Ferdinand" />
        <div className="dashboard_view2">
          <Switch>
            <Route path="/internalcontrol/overview" component={Overview} />
            <Route path="/internalcontrol/requests" component={Requests} />
            <Route
              path="/internalcontrol/reverselodg"
              component={ReverseLodge}
            />
            <Route path="/internalcontrol/reports" component={Reports} />
            <Route
              path="/internalcontrol/rejectedcallover"
              component={RejectedCallover}
            />
            <Route
              path="/internalcontrol/approvedcallover"
              component={ApprovedCallover}
            />
            <Route path="/forgotpass" component={ForgotPassword} />
          </Switch>
        </div>
      </div>
    </Router>
  </div>
);

export default InternalControlUnit;
