import './Main.css';

const Main = () => {
  return (
    <header className="main head_nav_mt" id="main">
      <div className="container">
        <div className="row main-content">
          <div className="col-lg-7 col-12">
            <h1>
              ПЕТЕРБУРГ
              <span className="small">сквозь года</span>
              <span className="sub">с Владимиром Заруцким</span>
            </h1>
            
            <ul className="features">
              <li>Нарисуйте <b>12 пейзажей</b>: от ретро Петербурга до сегодняшних дней</li>
              <li>Изучите <b>способы передачи особенностей архитектуры</b> с помощью акварели</li>
              <li>Научитесь передавать <b>художественные образы и замыслы</b></li>
            </ul>
            
            <div className="button-wrapper">
              <a href="#about-course" className="button button_big scroll">
                узнать подробности
              </a>
            </div>
          </div>
          
          <div className="col-lg-5 d-none d-lg-block">
            <div className="images-wrapper">
              <picture>
                <source type="image/webp" srcSet="/images/main/img.webp" />
                <img className="main-image" src="/images/main/img.png" alt="Иллюстрация курса" />
              </picture>
              <picture>
                <source type="image/webp" srcSet="/images/main/brush.webp" />
                <img className="brush-image" src="/images/main/brush.png" alt="Кисть художника" />
              </picture>
            </div>
          </div>
        </div>

        <div className="row d-block d-lg-none">
          <div className="col-12">
            <picture>
              <source type="image/webp" srcSet="/images/main/img.webp" />
              <img className="mobile-image" src="/images/main/img.png" alt="Иллюстрация курса" />
            </picture>
          </div>
        </div>

        <div className="row advantages">
          <div className="col-lg-3 col-sm-6 col-12">
            <div className="advantage-item">
              <p><b>Материал:</b> акварель</p>
            </div>
          </div>
          
          <div className="col-lg-3 col-sm-6 col-12">
            <div className="advantage-item">
              <p><b>Количество картин:</b> 12</p>
            </div>
          </div>
          
          <div className="col-lg-3 col-sm-6 col-12">
            <div className="advantage-item">
              <p><b>Продолжительность курса:</b> 20 часов</p>
            </div>
          </div>
          
          <div className="col-lg-3 col-sm-6 col-12">
            <div className="advantage-item">
              <p><b>Доступ:</b> бессрочный</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Main;