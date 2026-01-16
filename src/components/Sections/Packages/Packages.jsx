import { useEffect } from 'react';
import { currencyRates, packagesData } from '../../../constants/constants';
import './Packages.scss';

const Packages = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.$) {
      const $ = window.$;
      
      const initializeCurrencySwitchers = () => {
        $('.packages__item').each(function() {
          const $card = $(this);
          const priceRUB = $card.data('price-rub');
          
          $card.find('.codes > button').off('click').on('click', function(e) {
            e.preventDefault();
            const currency = $(this).data('currency');
            const rate = currencyRates[currency].value;
            const symbol = currencyRates[currency].symbol;
            
            $card.find('.codes > button').removeClass('active');
            $(this).addClass('active');
            
            if (priceRUB) {
              const converted = Math.ceil(priceRUB / rate);
              const formattedPrice = converted.toLocaleString('ru');
              
              $card.find('.packages__item-price-new span:first-child').text(formattedPrice);
              $card.find('.packages__item-price-new .symbol').text(' ' + symbol);
            }
          });
          
          $card.find('.codes > button[data-currency="RUB"]').addClass('active');
        });
        
        $('.button-big').off('click').on('click', function() {
          const $item = $(this).closest('.packages__item');
          const title = $item.find('.packages__item-title').text();
          console.log(`Выбран тариф: ${title}`);
        });
      };
      
      initializeCurrencySwitchers();
      
      return () => {
        $('.codes > button').off('click');
        $('.button-big').off('click');
      };
    }
  }, []);

  return (
    <section id="packages" className="packages">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2>Тарифы</h2>
          </div>
        </div>
        
        <div className="row mt-4">
          {packagesData.map((pkg) => (
            <div key={pkg.id} className="col-12 col-md-8 offset-md-2 col-lg-4 offset-lg-0 mb-5 d-flex flex-column">
              <div 
                className={`packages__item packages__item-${pkg.id} d-flex flex-column border`}
                data-price-rub={pkg.priceRUB}
              >
                <div className="packages__item-title">
                  {pkg.title}
                </div>
                <div className="d-flex flex-column justify-content-between flex-grow-1">
                  <div className="packages__item-description">
                    <ul>
                      {pkg.features.map((feature, idx) => {
                        if (typeof feature === 'string') {
                          return <li key={idx}>{feature}</li>;
                        } else if (feature.icon) {
                          return (
                            <li key={idx}>
                              <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="20" 
                                height="20" 
                                fill="currentColor" 
                                className="bi bi-coin" 
                                viewBox="0 0 16 16"
                              >
                                <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z"></path>
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                                <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                              </svg>
                              {feature.text}
                            </li>
                          );
                        } else {
                          return (
                            <li key={idx} className={!feature.included ? 'none' : ''}>
                              {feature.text}
                            </li>
                          );
                        }
                      })}
                    </ul>
                  </div>
                  
                  <div className="packages__item-buy mt-auto">
                    <div className="packages__item-prices">
                      <div className="packages__item-price packages__item-price-new text-center mt-4">
                        <span>{pkg.priceRUB.toLocaleString('ru')}</span>
                        <span className="symbol"> ₽</span>
                      </div>
                    </div>
                    
                    <div className="codes mb-3 mt-4 pt-2 text-center">
                      {Object.keys(currencyRates).map((currency) => (
                        <button
                          key={currency}
                          type="button"
                          className="currency-code"
                          data-currency={currency}
                        >
                          {currencyRates[currency].symbol}
                        </button>
                      ))}
                    </div>
                    
                    <div className="buttons my-5">
                      <button 
                        type="button"
                        className="button-big"
                      >
                        Принять участие
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;