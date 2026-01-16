import { useEffect, useState } from 'react';
import './Ask.scss';
import WaTooltip from '../../WaTooltip/WaTooltip';
import Toast from '../../Toast/Toast';

const Ask = () => {
	const [showWaTooltip, setShowWaTooltip] = useState(false);
	const [showCopyToast, setShowCopyToast] = useState(false);
	const [toastMessage, setToastMessage] = useState('');

	useEffect(() => {
		if (typeof window !== 'undefined' && window.$) {
			const $ = window.$;

			$('.ask__whatsapp-button').on('click', function (e) {
				e.preventDefault();
				setShowWaTooltip(true);
			});

			// Автоматическое закрытие тултипа через 10 секунд
			if (showWaTooltip) {
				const timer = setTimeout(() => {
					setShowWaTooltip(false);
				}, 10000);

				return () => clearTimeout(timer);
			}
		}
	}, [showWaTooltip]);

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

	return (
		<section className="ask" id="ask">
			<div className="container">
				<div className="row">
					<div className="col-12 text-center">
						<h2 className="ask__title">Остались вопросы по курсу?</h2>
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
							<div className="ask__whatsapp-wrapper">
								<button className="ask__button ask__button--whatsapp ask__whatsapp-button">
									WhatsApp
									<img
										src="/images/icons/whatsapp.svg"
										alt="WhatsApp"
										className="ask__button-icon"
									/>
								</button>

								{showWaTooltip && (
									<WaTooltip
										isOpen={showWaTooltip}
										onClose={() => setShowWaTooltip(false)}
										placement="bottom"
										onCopy={copyWithToast}
									/>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>

			<Toast
				message={toastMessage}
				isVisible={showCopyToast}
				onClose={() => setShowCopyToast(false)}
			/>
		</section>
	);
};

export default Ask;