import PropTypes from 'prop-types';
import css from './Notification.module.css';

export default function Notification({ message }) {
  // function Notification({ message }) {
  return (
    <div>
      <p className={css.message}>{message}</p>
    </div>
  );
}

Notification.prototype = {
  message: PropTypes.string.isRequired,
};
