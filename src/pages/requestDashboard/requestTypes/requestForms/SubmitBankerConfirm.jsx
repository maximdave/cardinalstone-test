import "../Requests.css";
// eslint-disable-next-line import/prefer-default-export
export const SubmitBankerConfirm = (
  <div className="left">
    <div>
      <label>Executed Banker's Confirmation</label>
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
        Affix passport photograph on the letter duly authenticated by your bank
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

export const SubmitBankerConfirmHeader = (
  <div>
    <h3>Submission of Bankers’ Confirmation Letters</h3>
    <p>To complete this request, please upload the required documents below</p>
  </div>
);
