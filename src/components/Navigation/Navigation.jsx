import { useState, useEffect } from 'react';
import './Navigation.scss';
import WaTooltip from '../WaTooltip/WaTooltip';
import Toast from '../Toast/Toast';

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState(null);
    const [showCopyToast, setShowCopyToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    
    const [showWaTooltipNav, setShowWaTooltipNav] = useState(false);
    const [showWaTooltipMobile, setShowWaTooltipMobile] = useState(false);

    const navItems = [
        { id: 'about-course', label: 'О чем курс' },
        { id: 'packages', label: 'Записаться на курс' },
        { id: 'ask', label: 'Контакты' }
    ];

    useEffect(() => {
        if (typeof window !== 'undefined' && window.$) {
            const $ = window.$;
            
            let scrollTimer;
            const $button = $('.navigation__mobile-toggle');
            
            const handleScroll = () => {
                if (window.innerWidth < 576) {
                    $button.css({
                        opacity: '0',
                        visibility: 'hidden',
                        transition: 'opacity 0.15s ease, visibility 0.15s ease'
                    });

                    clearTimeout(scrollTimer);

                    scrollTimer = setTimeout(() => {
                        if (!isMenuOpen) {
                            $button.css({
                                opacity: '1',
                                visibility: 'visible'
                            });
                        }
                    }, 800);
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
							
                <div className={`navigation__container container ${isMenuOpen ? 'navigation__container--hidden' : ''}`}>
                    <div className="row align-items-center">
                        <div className="col-lg-1">
                            <a
                                href="/"
                                className="navigation__logo"
                                onClick={scrollToTop}
                            >
                                <img
                                    src="/images/header/sobaka.svg"
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
                                {/* Контейнер для кнопки WhatsApp с тултипом */}
                                <div className="navigation__whatsapp-container">
                                    <button
                                        className="navigation__social-btn navigation__social-btn--whatsapp"
                                        aria-label="WhatsApp"
                                        onClick={() => {
                                            setShowWaTooltipNav(!showWaTooltipNav);
                                            if (showWaTooltipMobile) {
                                                setShowWaTooltipMobile(false);
                                            }
                                        }}
                                    ></button>
                                    
                                    {showWaTooltipNav && (
                                        <WaTooltip
                                            isOpen={showWaTooltipNav}
                                            onClose={() => setShowWaTooltipNav(false)}
                                            placement="bottom"
                                            onCopy={copyWithToast}
                                        />
                                    )}
                                </div>
                                
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

                    <ul className="navigation__mobile-list list-unstyled">
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
                        
                        {/* Контейнер для кнопки WhatsApp в мобильном меню */}
                        <div className="navigation__whatsapp-container">
                            <button
                                className="navigation__social-btn navigation__social-btn--whatsapp"
                                aria-label="WhatsApp"
                                onClick={() => {
                                    setShowWaTooltipMobile(!showWaTooltipMobile);
                                    if (showWaTooltipNav) {
                                        setShowWaTooltipNav(false);
                                    }
                                }}
                            ></button>
                            
                            {showWaTooltipMobile && (
                                <WaTooltip
                                    isOpen={showWaTooltipMobile}
                                    onClose={() => setShowWaTooltipMobile(false)}
                                    placement="top"
                                    onCopy={copyWithToast}
                                />
                            )}
                        </div>
                    </div>
                </div>

                {isMenuOpen && (
                    <div
                        className="navigation__overlay"
                        onClick={() => setIsMenuOpen(false)}
                    ></div>
                )}
            </nav>

            <Toast 
                message={toastMessage}
                isVisible={showCopyToast}
                onClose={() => setShowCopyToast(false)}
            />
        </>
    );
};

export default Navigation;