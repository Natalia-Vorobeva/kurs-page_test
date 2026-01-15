import React from 'react';
import './What.css';

const What = () => {
	return (
		<section className="what" id="what">
			<div className="container">
				<div className="what__rows">
					<div className="col-lg-8 col-12 what__bg">
						<h2 className="">Для кого будет полезен курс</h2>
						<p>На моем курсе «Петербург сквозь года с Владимиром Заруцким» вы научитесь рисовать акварелью городские пейзажи. Этот курс для тех, кто хочет <b>научиться или усовершенствовать свои навыки в акварели</b>. Уверен, вам понравится!</p>
					</div>
					<div className="col-lg-4 col-12 what__background">
						<picture>
							<source type="image/webp" srcSet="images/what/img575.webp" media="(max-width: 575px)" />
							{/* !!! сюда img575.jpg */}
							<source type="image/jpeg" srcSet="images/what/img-2x-scale-2_00x.jpg" media="(max-width: 575px)" />
							<source type="image/webp" srcSet="images/what/img-2x-scale-2_00x.jpg" />
							{/* <img className="img-fluid what-img" src="images/what/img-2x-scale-2_00x.webp" alt="" loading="lazy" /> */}
							<img className="img-fluid what-img" src="images/what/img-2x-scale-2_00x.jpg" alt="" loading="lazy" />
						</picture>
					</div>
				</div>
			</div>
		</section>
	);
};

export default What;