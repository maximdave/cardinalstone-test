import React from 'react';
import companyLogo from '../../../assets/CSRLLogo1.png';

const FormHeader = ({ boldText, subText }) => (
  <>
    <div className="company_logo">
      <img src={companyLogo} alt="" srcSet="" />
    </div>
    <div className="header_text">
      <h2 className="header_text_bold">{boldText}</h2>
      <h2 className="header_text_thin">{subText}</h2>
    </div>
  </>
);

export default FormHeader;
