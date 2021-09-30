import "../Requests.css";
// eslint-disable-next-line import/prefer-default-export
export const ChangeOfAddressForm = (
  <div className="left">
    <div>
      <label>
        Letter of request stating the old and new addresses and duly signed by
        the shareholder OR shareholder to fill the change of address form
      </label>
      <div className="file-input">
        <input type="file" />
        <span className="button">SELECT</span>
        <span className="label" data-js-label>
          png, jpeg (=300KB)
        </span>
      </div>
    </div>
    <div>
      <label>
        Means of Identification i.e National ID Card, Driver’s License,
        International Passport or Permanent Voter’s Card
      </label>
      <div className="file-input">
        <input type="file" />
        <span className="button">SELECT</span>
        <span className="label" data-js-label>
          png, jpeg (=300KB)
        </span>
      </div>
    </div>

    <button>SUBMIT REQUEST</button>
  </div>
);

export const ChangeOfAddressHeader = (
  <div>
    <h3>Change of Address </h3>
    <p>To complete this request, please upload the required documents below</p>
  </div>
);
