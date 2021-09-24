import '../Requests.css';
// eslint-disable-next-line import/prefer-default-export
export const TransferOfSharesForm = (
  <div className="left">
    <div>
      <label>Letter of Request from the Transferor</label>
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
        Sworn Affidavit issued by the High Court from the Transferor
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
        Banker’s Confirmation of Signature letter of the Child(ren)/Ward
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
      <label>Birth Certificate of the child(ren)/Ward</label>
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

export const TransferHeader = (
  <div>
    <h3>Transfer of Shares</h3>
    <p>To complete this request, please upload the required documents below</p>
  </div>
);
