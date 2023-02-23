import PropTypes from 'propTypes';
import styles from './Notification.module.css';

export const Notification = ({ message }) => {
  return (
    <>
      <p className={styles.message}>{message}</p>
    </>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
