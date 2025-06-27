
import "../../css/modal.css";

const Modal = () => {
  return (
    <div className="modal">
        <div className="modal-container">
           <div className="modal__title">
            <h1>title</h1>
           </div>
           <div className="modal__content">
            <h1>content</h1>
           </div>
           <div className="modal__footer">
            <button>close</button>
           </div>
        </div>
    </div>
  );
};

export default Modal;
