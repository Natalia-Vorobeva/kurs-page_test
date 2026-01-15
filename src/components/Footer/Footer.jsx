import React from 'react';
import './Footer.scss';

function Footer() {
    return (
        <footer className="global-footer">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center footer-content">
                        <p className="footer-link">
                            <a 
                                href="https://sobakarisovaka.ru/pers.html" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                Политика приватности
                            </a>
                        </p>
                        <p className="footer-text">
                            По всем вопросам вы можете писать в службу поддержки:
                        </p>
                        <p className="footer-email">
                            <a 
                                href="mailto:admin@sobakarisovaka.ru" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                admin@sobakarisovaka.ru
                            </a>
                        </p>
                        <p className="footer-copyright">
                            © {new Date().getFullYear()}, ИП Косенко Андрей Владимирович, ОГРН 308614728400011
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;