import '../Requests.css';
// eslint-disable-next-line import/prefer-default-export
export const DematRequestForm = (
  <div className="left">
    <div>
      <label>
        Duly executed dematerialization form signed by the shareholder and two
        authorized signatories
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
      <label>Authenticated Coloured passport photograph</label>
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
    <div>
      <label>CSCS Statement</label>
      <div className="file-input">
        <input type="file" />
        <span className="button">SELECT</span>
        <span className="label" data-js-label>
          png, jpeg (=300KB)
        </span>
      </div>
    </div>
    <div>
      <label>Other supporting documents</label>
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
export const DematHeader = (
  <div>
    <h3>Demat request</h3>
    <p>To complete this request, please upload the required documents below</p>
  </div>
);
