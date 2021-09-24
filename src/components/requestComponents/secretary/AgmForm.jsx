import React from 'react';
import CompanyCard from '../general/CompanyCard';
import NumberCard from '../general/NumberCard';

const AgmForm = () => (
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
  </div>
);

export default AgmForm;
