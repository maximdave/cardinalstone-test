import "./Modal.css";

const Modal = (props) => {
  const { show } = props;
  function cancelHandler() {
    props.onCancel();
  }
  function confirmHandler() {
    props.onConfirm();
  }
  return (
    <div style={{ display: show ? "block" : "none" }}>
      <div className="card-div">
        <div className="modal-card">
          {/* <h1>Confirm Deactivation</h1> */}
          <h1>Confirm Reverse Lodgement</h1>
          <hr />
          <p>Do you want to reverse this request?</p>
          <div className="button-flex">
            <button className="yes" onClick={confirmHandler}>
              CONFIRM
            </button>
            <button className="no" onClick={cancelHandler}>
              CANCEL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
