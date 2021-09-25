import '../Requests.css';
// eslint-disable-next-line import/prefer-default-export
export const CorrectionOfNameForm = (
  <div className="left">
    <div>
      <label>Request Letter</label>
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
        Sworn Affidavit from the High Court with an affixed coloured passport
        photograph duly authenticated by the Court
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
export const CorrectionOfNameHeader = (
  <div>
    <h3>Correction of Name</h3>
    <p>To complete this request, please upload the required documents below</p>
  </div>
);
