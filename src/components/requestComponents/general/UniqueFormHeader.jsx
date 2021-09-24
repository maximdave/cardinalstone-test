import React from 'react';
import companyLogo from '../../../assets/CSRLLogo1.png';
import headerFormIcon from '../../../assets/XMLID_144_.png';

const UniqueFormHeader = ({ formTitle, displayIcon = true }) => (
  <div className="unique_form_header">
    <div className="header_section_one">
      <div className="company_logo">
        <img src={companyLogo} alt="" srcSet="" />
      </div>
      <div className="unique_header_text">
        <p className="unique_header_text_bold">{formTitle}</p>
      </div>
    </div>
    <div className="header_section_two">
      <div className="header_form_icon">
        {displayIcon && <img src={headerFormIcon} alt="" srcSet="" />}
      </div>
    </div>
  </div>
);

export default UniqueFormHeader;
