// import React, { useContext } from 'react';
// import BlueButton from '../general/BlueButton';
// import passwordIcon from '../../assets/password.png';
// import FormHeader from '../general/FormHeader';

// import FormGroup from '../general/FormGroup';
// import SecretaryContext from '../../contexts/secretary/SecretaryContext';

// const ChangePassword = () => {
//   const { handleChangedPassword } = useContext(SecretaryContext);
//   return (
//     <div className="createadmin">
//       <FormHeader boldText="COMPANY SECRETARY PORTAL" />
//       <div className="success_icon">
//         <img src={passwordIcon} alt="" />
//       </div>
//       <div className="success_text">
//         <p className="big_success_text">Change Password</p>
//         <p>Welcome! Please change your password </p>
//       </div>

//       <form className="register_form">
//         {/* {error && <span>{error}</span>} */}

//         <FormGroup
//           // onChange={(e) => setPassword(e.target.value)}
//           // value={password}
//           headerText="Enter new password"
//           placeholder="Enter new password"
//           type="password"
//           labelFor="password"
//         />
//         <FormGroup
//           // onChange={(e) => setPassword(e.target.value)}
//           // value={password}
//           headerText="Confirm new password"
//           placeholder="Confirm new password"
//           type="password"
//           labelFor="password"
//         />

//         <BlueButton
//           click={handleChangedPassword}
//           buttonText="CHANGE PASSWORD"
//         />
//       </form>
//     </div>
//   );
// };

// export default ChangePassword;
