import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NameBar from "../../components/requestComponents/general/NameBar";
import Overview from "../../components/requestComponents/secretary/Overview";
import Reports from "./Report";
import Navbar from "../../components/requestComponents/secretary/Navbar";
// import StockRequestStart from "../requestTypes/StockRequestStart";
import StockRequestStart from "../initiatorDashboard/requestTypes/StockRequestStart";

import "./StockbrokerDashboard.css";
import Requests from "./requestTypes/Requests";
// import Requests from "../initiatorDashboard/requestTypes/Requests";

const StockbrokerDashboard = () => (
  <div className="secretary_dashboard">
    <Router>
      <Navbar />
      <div className="dashboard_section">
        <NameBar name="Jones" title="Jones Ferdinand" />
        <div className="dashboard_view">
          <Switch>
            <Route path="/stockbrokerdashboard/overview" component={Overview} />
            <Route
              path="/stockbrokerdashboard/requests"
              component={StockRequestStart}
            />
            <Route
              path="/stockbrokerdashboard/inrequests/:requestParam"
              component={Requests}
            />
            <Route path="/stockbrokerdashboard/reports" component={Reports} />
            {/* <Route path="/stockbrokerdashboard/requests" component={Requests} /> */}
          </Switch>
        </div>
      </div>
    </Router>
  </div>
);

export default StockbrokerDashboard;
