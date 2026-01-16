import './Main.scss';

const Main = () => {
  return (
    <section className="main" id="main">
      <div className="container">
        <div className="row main__content">
          <div className="col-lg-6 col-12 main__left-col">
            <h1 className="main__title">
              ПЕТЕРБУРГ
              <span className="main__title-small">сквозь года</span>
              <span className="main__title-sub">с Владимиром Заруцким</span>
            </h1>
            
            <ul className="main__features">
              <li className="main__feature-item">Нарисуйте <b>12 пейзажей</b>: от ретро Петербурга до сегодняшних дней</li>
              <li className="main__feature-item">Изучите <b>способы передачи особенностей архитектуры</b> с помощью акварели</li>
              <li className="main__feature-item">Научитесь передавать <b>художественные образы и замыслы</b></li>
            </ul>
            
            <div className="main__button-wrapper">
              <a href="#about-course" className="main__button button_base scroll">
                узнать подробности
              </a>
            </div>
          </div>
          
          <div className="col-lg-6 d-none d-lg-block main__right-col">
            <picture>
              <source type="image/webp" srcSet="/images/main/img.webp" />
              <img className="main__image" src="/images/main/img.png" alt="Иллюстрация курса" />
            </picture>
            <picture>
              <source type="image/webp" srcSet="/images/main/brush.webp" />
              <img className="main__brush-image" src="/images/main/brush.png" alt="Кисть художника" />
            </picture>
          </div>
        </div>

        <div className="row d-block d-lg-none">
          <div className="col-12">
            <picture>
              <source type="image/webp" srcSet="/images/main/img.webp" />
              <img className="main__mobile-image" src="/images/main/img.png" alt="Иллюстрация курса" />
            </picture>
          </div>
        </div>

        <div className="row main__advantages">
          <div className="col-lg-3 col-sm-6 col-12">
            <div className="main__advantage-item">
              <p><b>Материал:</b> акварель</p>
            </div>
          </div>
          
          <div className="col-lg-3 col-sm-6 col-12">
            <div className="main__advantage-item">
              <p><b>Количество картин:</b> 12</p>
            </div>
          </div>
          
          <div className="col-lg-3 col-sm-6 col-12">
            <div className="main__advantage-item">
              <p><b>Продолжительность курса:</b> 20 часов</p>
            </div>
          </div>
          
          <div className="col-lg-3 col-sm-6 col-12">
            <div className="main__advantage-item">
              <p><b>Доступ:</b> бессрочный</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;