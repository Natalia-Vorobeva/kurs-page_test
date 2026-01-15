import { useState, useEffect } from 'react';
import './Navigation.scss';

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState(null);
    const [showWaPopup, setShowWaPopup] = useState(false);
    const [showCopyToast, setShowCopyToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    const navItems = [
        { id: 'about-course', label: 'О чем курс' },
        { id: 'packages', label: 'Записаться на курс' },
        { id: 'ask', label: 'Контакты' }
    ];

    useEffect(() => {
        if (typeof window !== 'undefined' && window.$) {
            const $ = window.$;
            
            // Скрытие кнопки при скролле для мобильных
            let scrollTimer;
            const $button = $('.navigation__mobile-toggle');
            
            const handleScroll = () => {
                if (window.innerWidth < 576) {
                    $button.css({
                        opacity: '0',
                        visibility: 'hidden',
                        transition: 'opacity 0.15s ease, visibility 0.15s ease' // Ускоренная анимация
                    });

                    clearTimeout(scrollTimer);

                    scrollTimer = setTimeout(() => {
                        if (!isMenuOpen) {
                            $button.css({
                                opacity: '1',
                                visibility: 'visible'
                            });
                        }
                    }, 800); // Уменьшено время до 800мс
                }
            };

            $(window).on('scroll', handleScroll);

            if (isMenuOpen) {
                $button.css({
                    opacity: '1',
                    visibility: 'visible'
                });
            }
            
            return () => {
                $(window).off('scroll', handleScroll);
                clearTimeout(scrollTimer);
            };
        }
    }, [isMenuOpen]);

    const handleLinkClick = (linkId) => {
        setActiveLink(linkId);
        setIsMenuOpen(false);
    };

    const getScrollOffset = () => {
        return window.innerWidth < 992 ? 0 : 80;
    };

    const handleSmoothScroll = (e, link) => {
        e.preventDefault();
        handleLinkClick(link);

        const element = document.getElementById(link);
        if (element) {
            const offset = getScrollOffset();
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const handleContactsClick = (e, link) => {
        e.preventDefault();
        handleLinkClick(link);

        const element = document.getElementById(link);
        if (element) {
            const offset = getScrollOffset();
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const copyWithToast = (text, message) => {
        navigator.clipboard.writeText(text).then(() => {
            setToastMessage(message || `Скопировано: ${text}`);
            setShowCopyToast(true);
            
            setTimeout(() => {
                setShowCopyToast(false);
            }, 2000);
        }).catch(() => {
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            
            setToastMessage('Скопировано в буфер обмена');
            setShowCopyToast(true);
            setTimeout(() => setShowCopyToast(false), 2000);
        });
    };

    const handleBurgerClick = (e) => {
        e.stopPropagation();
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToTop = (e) => {
        e.preventDefault();
        handleLinkClick(null);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            <nav className="navigation">
                <div className="navigation__container container">
                    <div className="row align-items-center">
                        <div className="col-lg-1">
                            <a
                                href="/"
                                className="navigation__logo"
                                onClick={scrollToTop}
                            >
                                <img
                                    src="/vite.svg"
                                    alt="Собака рисует"
                                    className="navigation__logo-image"
                                />
                            </a>
                        </div>

                        <div className="col-12 col-lg-9">
                            <ul className="navigation__list">
                                {navItems.map((item) => (
                                    <li
                                        key={item.id}
                                        className={`navigation__item ${activeLink === item.id ? 'navigation__item--active' : ''}`}
                                    >
                                        <a
                                            href={`#${item.id}`}
                                            className="navigation__link"
                                            onClick={(e) => {
                                                if (item.id === 'ask') {
                                                    handleContactsClick(e, item.id);
                                                } else {
                                                    handleSmoothScroll(e, item.id);
                                                }
                                            }}
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="col-12 col-lg-2">
                            <div className="navigation__social">
                                <button
                                    className="navigation__social-btn navigation__social-btn--whatsapp"
                                    aria-label="WhatsApp"
                                    onClick={() => setShowWaPopup(true)}
                                ></button>
                                
                                <a
                                    href="https://t.me/sobaka_help_bot"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="navigation__social-btn navigation__social-btn--telegram"
                                    aria-label="Наш телеграм бот"
                                ></a>
                            </div>
                        </div>
                    </div>
                </div>

                <button
                    className={`navigation__mobile-toggle ${isMenuOpen ? 'navigation__mobile-toggle--active' : ''}`}
                    aria-label="Открыть/Закрыть меню"
                    type="button"
                    onClick={handleBurgerClick}
                >
                    <span className="navigation__toggle-icon">
                        {isMenuOpen ? "✕" : "☰"}
                    </span>
                </button>

                <div className={`navigation__mobile ${isMenuOpen ? 'navigation__mobile--open' : ''}`}>
                    <div className="navigation__mobile-logo">
                        <a
                            href="/"
                            className="navigation__logo"
                            onClick={(e) => {
                                e.preventDefault();
                                handleLinkClick(null);
                                setIsMenuOpen(false);
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                        >
                            <img
                                src="/vite.svg"
                                alt="Собака рисует"
                                className="navigation__logo-image"
                            />
                        </a>
                    </div>

                    <ul className="navigation__mobile-list">
                        {navItems.map((item) => (
                            <li
                                key={item.id}
                                className="navigation__mobile-item"
                            >
                                <a
                                    href={`#${item.id}`}
                                    className={`navigation__mobile-link ${activeLink === item.id ? 'navigation__mobile-link--active' : ''}`}
                                    onClick={(e) => {
                                        if (item.id === 'ask') {
                                            handleContactsClick(e, item.id);
                                        } else {
                                            handleSmoothScroll(e, item.id);
                                        }
                                        setIsMenuOpen(false);
                                    }}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="navigation__mobile-social">
                        <a
                            href="https://t.me/sobaka_help_bot"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="navigation__social-btn navigation__social-btn--telegram"
                            aria-label="Telegram"
                        ></a>
                        <button
                            className="navigation__social-btn navigation__social-btn--whatsapp"
                            aria-label="WhatsApp"
                            onClick={(e) => {
                                e.preventDefault();
                                setShowWaPopup(true);
                                setIsMenuOpen(false);
                            }}
                        ></button>
                    </div>
                </div>

                {isMenuOpen && (
                    <div
                        className="navigation__overlay"
                        onClick={() => setIsMenuOpen(false)}
                    ></div>
                )}
            </nav>

            <div className="navigation__spacer"></div>

            {/* Обновленное модальное окно */}
            <div className={`popup ${showWaPopup ? 'popup--active' : ''}`} onClick={() => setShowWaPopup(false)}>
                <div className="popup__content" onClick={e => e.stopPropagation()}>
                    <button 
                        className="popup__close" 
                        onClick={() => setShowWaPopup(false)}
                        aria-label="Закрыть"
                    >
                        &times;
                    </button>
                    
                    <div className="popup__icon">
                        <svg viewBox="0 0 24 24" fill="white">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                    </div>
                    
                    <h3 className="popup__title">Свяжитесь с нами</h3>
                    <p className="popup__description">
                        Нажмите на номер телефона, чтобы скопировать его или перейдите в WhatsApp для быстрой связи
                    </p>
                    
                    <a 
                        href="tel:+74952041261" 
                        className="popup__phone"
                        onClick={(e) => {
                            e.preventDefault();
                            copyWithToast('+7 (495) 204-12-61', 'Номер телефона скопирован');
                        }}
                    >
                        +7 (495) 204-12-61
                    </a>
                    
                    <div className="popup__buttons">
                        <a 
                            href="https://wa.me/74952041261" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="popup__button popup__button--primary"
                            onClick={() => setShowWaPopup(false)}
                        >
                            Написать в WhatsApp
                        </a>
                        <button 
                            className="popup__button popup__button--secondary"
                            onClick={() => {
                                copyWithToast('+7 (495) 204-12-61', 'Номер телефона скопирован');
                                setShowWaPopup(false);
                            }}
                        >
                            Скопировать номер
                        </button>
                    </div>
                </div>
            </div>

            {showCopyToast && (
                <div className="toast toast--active" onClick={() => setShowCopyToast(false)}>
                    <svg className="toast__icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    <div className="toast__text">{toastMessage}</div>
                </div>
            )}
        </>
    );
};

export default Navigation;