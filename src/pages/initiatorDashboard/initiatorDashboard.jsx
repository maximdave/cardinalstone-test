import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NameBar from "../../components/requestComponents/general/NameBar";
import Navbar from "../../components/stockrequest/Navbar";
import Overview from "../../components/stockrequest/Overview";

import "./initiatorDashboard.css";
import Requests from "./requestTypes/Requests";
import ForgotPassword from "../admin/ForgotPassword/ForgotPassword";
import ReverseLodge from "./ReverseLodge";
import Reports from "./Report";
import ApprovedCallover from "./ApprovedCallover";
import RejectedCallover from "./RejectedCallover";
import RequestStart from "./requestTypes/RequestStart";

const InitiatorDashboard = () => (
  <div className="secretary_dashboard">
    <Router>
      <Navbar />
      <div className="dashboard_section">
        <NameBar name="Jones" title="Jones Ferdinand" />
        <div className="dashboard_view2">
          <Switch>
            <Route path="/initiatorDashboard/overview" component={Overview} />
            <Route
              path="/initiatorDashboard/requests"
              component={RequestStart}
            />
            <Route path="/initiatorDashboard/inrequest" component={Requests} />
            <Route
              path="/initiatorDashboard/reverselodg"
              component={ReverseLodge}
            />
            <Route path="/initiatorDashboard/reports" component={Reports} />
            <Route
              path="/initiatorDashboard/rejectedcallover"
              component={RejectedCallover}
            />
            <Route
              path="/initiatorDashboard/approvedcallover"
              component={ApprovedCallover}
            />
            <Route path="/forgotpass" component={ForgotPassword} />
          </Switch>
        </div>
      </div>
    </Router>
  </div>
);

export default InitiatorDashboard;
