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
import RequestStart from "./RequestStartVerify";

const VerificationUnit = () => (
  <div className="secretary_dashboard">
    <Router>
      <Navbar />
      <div className="dashboard_section">
        <NameBar name="Jones" title="Jones Ferdinand" />
        <div className="dashboard_view2">
          <Switch>
            <Route
              path="/verificationDashboard/overview"
              component={Overview}
            />
            <Route
              path="/verificationDashboard/requests"
              component={RequestStart}
            />
            <Route
              path="/verificationDashboard/inrequest"
              component={Requests}
            />
            <Route
              path="/verificationDashboard/reverselodg"
              component={ReverseLodge}
            />
            <Route path="/verificationDashboard/reports" component={Reports} />
            <Route
              path="/verificationDashboard/rejectedcallover"
              component={RejectedCallover}
            />
            <Route
              path="/verificationDashboard/approvedcallover"
              component={ApprovedCallover}
            />
            <Route path="/forgotpass" component={ForgotPassword} />
          </Switch>
        </div>
      </div>
    </Router>
  </div>
);

export default VerificationUnit;
