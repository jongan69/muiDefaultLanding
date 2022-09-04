
import styles from '../styles/Modal.module.css'

function Modal({ children, shown, close, openPage }) {
    return shown ? (
      <div
        className={styles.modalBackdrop}
        onClick={() => {
          // close modal when outside of modal is clicked
          close();
        }}
      >
        <div
         className={styles.modalContent}
          onClick={e => {
            // do not close modal if anything inside modal content is clicked
            e.stopPropagation();
          }}
        >
        <button className={styles.closeModalButton} onClick={close}>Close</button>
          {children}
          <button onClick={openPage}>Continue</button>
        </div>
      </div>
    ) : null;
  }
  export default Modal;