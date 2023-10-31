import styles from './ConfirmBox.module.css';

const ConfirmBox = (props) => {
    return (
      <div className={styles.confirmBox}>
        <div className={styles.confirmBoxContent}>
          <p className={styles.confirmMessage}>{props.message}</p>
          <div className={styles.confirmButtons}>
            <button className={styles.cancelButton} onClick={props.onCancel}>
              Cancel
            </button>
            <button className={styles.confirmButton} onClick={props.onConfirm}>
              Confirm
            </button>
          </div>
        </div>
      </div>
    );
  };

  export default ConfirmBox;