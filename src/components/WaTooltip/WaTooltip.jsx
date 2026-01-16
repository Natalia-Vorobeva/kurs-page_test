import { useEffect, useRef } from 'react';
import './WaTooltip.scss';

const WaTooltip = ({ 
  isOpen, 
  onClose, 
  placement = 'bottom',
  onCopy 
}) => {
  const tooltipRef = useRef(null);
  
  useEffect(() => {
    if (!isOpen) return;

    const timer = setTimeout(() => {
      onClose();
    }, 10000);

    const handleScroll = () => {
      onClose();
    };

    const handleClickOutside = (event) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
        onClose();
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleCopy = () => {
    onCopy('+7 (495) 204-12-61', 'Номер телефона скопирован');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div 
      className={`wa-tooltip wa-tooltip--${placement}`} 
      ref={tooltipRef}
    >
      <div className="wa-tooltip__content">
        <div className="wa-tooltip__phone" onClick={handleCopy}>
          +7 495 2041261
        </div>
        <div className="wa-tooltip__buttons">
          <button 
            className="wa-tooltip__button wa-tooltip__button--copy" 
            onClick={handleCopy}
          >
            Скопировать номер
          </button>
        </div>
      </div>
    </div>
  );
};

export default WaTooltip;