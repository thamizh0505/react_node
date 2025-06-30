
import "../../css/modal.css";

interface ModalProps {
    title: string;
    close: () => void;//void means it returns nothing(null)
}

const Modal = ({title,close}:ModalProps) => {
  return (
    <div className="modal">
        <div className="modal-container">
            <div className="modal__close" onClick={close}>X</div>
           <div className="modal__title">
            <h1>{title}</h1>
           </div>
           <div className="modal__content">
            {/* <h1>{content}</h1> */}
           </div>
           <div className="modal__footer">
            <button onClick={close}>Close</button>
           </div>
        </div>
    </div>
  );
};

export default Modal;
