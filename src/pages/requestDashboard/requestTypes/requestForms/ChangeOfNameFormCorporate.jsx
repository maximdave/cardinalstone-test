import "../Requests.css";
// eslint-disable-next-line import/prefer-default-export
export const ChangeOfNameFormCorporate = (
  <div className="left">
    <div>
      <label>Certificate of Incorporation from the CAC</label>
      <div className="file-input">
        <input type="file" />
        <span className="button">SELECT</span>
        <span className="label" data-js-label>
          png, jpeg (=300KB)
        </span>
      </div>
    </div>
    <div>
      <label>NSE & SEC Letters approving the change</label>
      <div className="file-input">
        <input type="file" />
        <span className="button">SELECT</span>
        <span className="label" data-js-label>
          png, jpeg (=300KB)
        </span>
      </div>
    </div>
    <div>
      <label>Signature Mandate/Board Resolution</label>
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
        Banker's Confirmation of Signature letter in the new name duly signed by
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
      <label>Request letter duly signed by authorized signatories</label>
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
export const ChangeOfNameHeaderC = (
  <div>
    <h3>Change of Name - Corporates</h3>
    <p>To complete this request, please upload the required documents below</p>
  </div>
);
