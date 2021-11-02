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
          <h1>Confirm Rejection</h1>
          <hr />
          <p>Do you want to reject this request?</p>
          <div className="button-flex">
            <button className="yes" onClick={confirmHandler}>
              YES
            </button>
            <button className="no" onClick={cancelHandler}>
              NO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
