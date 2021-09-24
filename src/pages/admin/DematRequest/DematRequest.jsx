import React from 'react';
import Sidebar from '../../../components/Sidebar/Sidebar';
import Navbar from '../../../components/Navbar/Navbar';
import './DematRequest.css';

const DematRequest = () => (
  <div className="demate-request-page">
    <div className="side">
      <Sidebar />
    </div>
    <div className="demat-request-main">
      <Navbar />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, dolor
        ratione necessitatibus perferendis nulla minima. Enim omnis liber o
        voluptatem quaerat maiores eos animi maxime at error tempore ipsa
        ratione sint iusto, odit deleniti officia tenetur nam consequuntur illo
        accusamus dolores. Quis aperiam fuga, expedita rerum harum maxime
        veritatis alias temporibus pariatur tempore facere vel, vero ut id
        provident optio.
      </p>
    </div>
  </div>
);

export default DematRequest;
