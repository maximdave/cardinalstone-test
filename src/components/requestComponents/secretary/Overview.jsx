import React from 'react';
import CompanyCard from '../general/CompanyCard';
import NumberCard from '../general/NumberCard';
import RequestCard from './subcomponents/RequestCard';
import agmIcon from '../../../assets/newagm.png';
import vrsIcon from '../../../assets/XMLID_51_vrs.png';
import reportIcon from '../../../assets/report.png';

const Overview = () => (
  <div className="dashboard_view">
    <div className="dashboard_head">
      <div className="dashboard_requests_header">
        <h3>Dashboard</h3>
      </div>
      <div className="dashboard_header">
        <NumberCard text="Pending Bills" number={7} />
        <NumberCard text="Treated Requests" number={5} />
        <CompanyCard
          logoUrl="https://www.careersinafrica.com/wp-content/uploads/2012/05/Total_Logo_Horizontal.png"
          companyName="Total Nigeria"
        />
      </div>
    </div>

    <div className="dashboard_requests">
      <div className="dashboard_requests_header">
        <h3>New Request</h3>
      </div>
      <div className="dashboard_requests_cards">
        <RequestCard
          linkPath="/agmreport"
          linkText="New AGM"
          linkIcon={agmIcon}
          bgColor="#9FA2B4"
        />
        <RequestCard
          linkPath="/vrsbroadcast"
          linkText="VRS Broadcast"
          linkIcon={vrsIcon}
          bgColor="#528DC2"
        />
        <RequestCard
          linkPath="/monthlyreport"
          linkText="Monthly Report"
          linkIcon={reportIcon}
          bgColor="#002564"
        />
      </div>
    </div>
  </div>
);

export default Overview;
