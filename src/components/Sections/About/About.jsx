import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className="about" id="about-course">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>О чем курс?</h2>
                    </div>
                </div>

                <div className="about-row">
									{/* Изображение - на десктопе слева, на мобильных снизу */}
                    <div className="col-lg-6 col-12">
                        <picture>
                            <source
                                type="image/webp"
                                srcSet="/images/about/1.webp"
                                media="(max-width: 575px)"
                            />
                            <source
                                type="image/jpeg"
                                srcSet="/images/about/1.jpg"
                                media="(max-width: 575px)"
                            />
                            <source
                                type="image/webp"
                                srcSet="/images/about/1-2x-scale-2_00x.webp"
                            />
                            <img
                                className="img-fluid about-img"
                                src="/images/about/1-2x-scale-2_00x.jpg"
                                alt="Пример работы курса"
                                loading="lazy"
                            />
                        </picture>
                    </div>
                    {/* Текст - на десктопе справа, на мобильных сверху */}
                    <div className="col-lg-6 col-12">
                        <div className="about-text">
                            <p>
                                Я подготовил для вас <strong>12 пейзажей</strong>: от ретро Петербурга до сегодняшних дней.
                                Вы научитесь не просто передавать художественные образы и замыслы, а <strong>оживлять их на бумаге</strong>.
                                Окунитесь в атмосферу этого удивительного города, где каждый архитектурный шедевр — это отдельная история.
                            </p>
                            <p>
                                С помощью акварели вы сможете передать <strong>все особенности и детали</strong>, которые делают
                                архитектуру Петербурга неповторимой. Мы вместе <strong>исследуем современный и ретро стили</strong>,
                                чтобы вы могли создать свои уникальные произведения, вдохновленные этим прекрасным городом.
                            </p>
                        </div>
                    </div>

                    
                </div>
            </div>
        </section>
    );
};

export default About;