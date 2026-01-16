import './Toast.scss';

const Toast = ({ message, isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="toast toast--active" onClick={onClose}>
      <svg className="toast__icon" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
      </svg>
      <div className="toast__text">{message}</div>
    </div>
  );
};

export default Toast;