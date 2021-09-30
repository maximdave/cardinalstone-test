import "../Requests.css";
// eslint-disable-next-line import/prefer-default-export
export const TransmisionOfSharesForm = (
  <div className="left">
    <div>
      <label>
        Letter of Introduction from the Administrators/Executors, introducing
        themselves as the legal representatives of the Estate. The letter should
        also indicate the names, addresses, signatures and BVNs of the
        individual Administrators/Executors.
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
        Original Death Certificate from the National Population Commission (NPC)
        for sighting.
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
        Original probate letter or Letter of Administration for sighting or the
        Certified True Copy (CTC) from a Notary Public.
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
      <label>Copy of newspaper advert placed by the Court or Gazette.</label>
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
        Any evidence of ownership of the investment i.e. CSCS statement(s) of
        the deceased, original share certificates, dividend stub or dividend
        warrants or bank statement(s) showing receipt of dividend(s) into the
        account(s) of the deceased.
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

export const TransmisionHeader = (
  <div>
    <h3>Transmission of Shares</h3>
    <p>To complete this request, please upload the required documents below</p>
  </div>
);
