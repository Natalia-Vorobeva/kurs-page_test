import React, { useEffect } from 'react';
import './Ask.scss';

const Ask = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.$) {
      const $ = window.$;
      
      $('.ask__whatsapp-button').on('click', function(e) {
        e.preventDefault();
        const waLink = 'https://wa.me/74952041261';
        const testWindow = window.open(waLink, '_blank');
        
        if (!testWindow || testWindow.closed || typeof testWindow.closed === 'undefined') {
          $('#waPopup').addClass('active');
        }
      });
      
      $('.popup').on('click', function(e) {
        if ($(e.target).hasClass('popup')) {
          $(this).removeClass('active');
        }
      });
      
      $('.popup-close').on('click', function() {
        $(this).closest('.popup').removeClass('active');
      });
      
      $(document).on('keyup', function(e) {
        if (e.key === 'Escape') {
          $('.popup').removeClass('active');
        }
      });
      
      return () => {
        $('.ask__whatsapp-button').off('click');
        $('.popup').off('click');
        $('.popup-close').off('click');
        $(document).off('keyup');
      };
    }
  }, []);

  return (
    <section className="ask" id="ask">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="ask__title">Остались вопросы <br/> по курсу?</h2>
          </div>
        </div>

        <div className="row ask__row">
          <div className="col-md-5 col-12">
            <div className="ask__buttons-wrapper">
              <p className="ask__subtitle">Свяжитесь с нами через Telegram</p>
              <a 
                className="ask__button ask__button--telegram" 
                href="https://t.me/sobaka_help_bot" 
                target="_blank"
                rel="noopener noreferrer"
              >
                Telegram
                <img 
                  src="/images/icons/telegram.svg" 
                  alt="Telegram" 
                  className="ask__button-icon"
                />
              </a>
            </div>
          </div>

          <div className="col-md-5 col-12">
            <div className="ask__buttons-wrapper">
              <p className="ask__subtitle">Свяжитесь с нами через WhatsApp</p>
              <button className="ask__button ask__button--whatsapp ask__whatsapp-button">
                WhatsApp
                <img 
                  src="/images/icons/whatsapp.svg" 
                  alt="WhatsApp" 
                  className="ask__button-icon"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ask;