import "../Requests.css";
// eslint-disable-next-line import/prefer-default-export
export const OutstandingDividendsForm = (
  <div className="left">
    <div>
      <label>Executed e-mandate form</label>
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

export const OutstandingDividendsHeader = (
  <div>
    <h3>Outstanding Dividends</h3>
    <p>To complete this request, please upload the required documents below</p>
  </div>
);
