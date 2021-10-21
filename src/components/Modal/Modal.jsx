import "./Modal.css";

const Modal = (props) => {
  function cancelHandler() {
    props.onCancel();
  }
  function confirmHandler() {
    props.onConfirm();
  }
  return (
    <div>
      <div className="card-div">
        <div className="modal-card">
          <h1>Confirm Deactivation</h1>
          <hr />
          <p>Do you want to deactivate the user?</p>
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
