import React from 'react';
import { CardHeader, Avatar } from '@mui/material';
import CompanyCard from '../general/CompanyCard';
import NumberCard from '../general/NumberCard';
import RequestCard from './subcomponents/RequestCard';
import blueAgmIcon from '../../../assets/Groupblueagm.png';
import callIcon from '../../../assets/call.png';
import emailIcon from '../../../assets/email.png';
import chatIcon from '../../../assets/chat.png';
import blueEgmIcon from '../../../assets/blueegm.png';
import othersIcon from '../../../assets/Groupothers.png';
import blueEmandateIcon from '../../../assets/emandate.png';
import blueEaccreditationIcon from '../../../assets/XMLID_51_eaccre.png';

const Requests = () => (
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
      <div className="dashboard_requests_header ">
        <h3>General Meeting</h3>
      </div>
      <div className="dashboard_requests_cards request_cards_shrink">
        <RequestCard
          linkPath="/agmreport"
          linkText="AGM Notice"
          linkIcon={blueAgmIcon}
          bgColor="#D8D8D8"
          subText="Annual General Meeting"
          fontColor="#3568A0"
        />
        <RequestCard
          linkPath="/egmreport"
          linkText="EGM Notice"
          linkIcon={blueEgmIcon}
          bgColor="#D8D8D8"
          subText="Extraordinary General Meeting"
          fontColor="#3568A0"
        />
      </div>
    </div>
    <div className="dashboard_requests">
      <div className="dashboard_requests_header ">
        <h3>VRS Broadcast</h3>
      </div>
      <div className="dashboard_requests_cards request_cards_shrink">
        <RequestCard
          linkPath="/emandate"
          linkText="E-mandate"
          linkIcon={blueEmandateIcon}
          bgColor="#D8D8D8"
          fontColor="#3568A0"
        />
        <RequestCard
          linkPath="/eaccreditation"
          linkText="E-accreditation and AGM"
          linkIcon={blueEaccreditationIcon}
          bgColor="#D8D8D8"
          fontColor="#3568A0"
        />
      </div>
    </div>
    <div className="dashboard_requests">
      <div className="dashboard_requests_header ">
        <h3>Other Requests</h3>
      </div>
      <div className="dashboard_requests_cards request_cards_shrink">
        <RequestCard
          linkPath="/emandate"
          linkText="Other Requests"
          linkIcon={othersIcon}
          bgColor="#D8D8D8"
          fontColor="#3568A0"
        />
      </div>
    </div>

    <div className="requests_utilities">
      <CardHeader avatar={<Avatar src={callIcon} />} title="Call" />
      <CardHeader avatar={<Avatar src={emailIcon} />} title="Send Mail" />
      <CardHeader avatar={<Avatar src={chatIcon} />} title="Chat" />
    </div>
  </div>
);

export default Requests;
