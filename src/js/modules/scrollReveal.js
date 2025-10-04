import ScrollReveal from 'scrollreveal';

// Базовые настройки
ScrollReveal({
	distance: '60px',
	duration: 2800,
	// reset: true,
});

function scrollRevealFunc () {
	ScrollReveal().reveal(`.header, .partners`, {
		distance: '0px',
		opacity: 0,
	});

	ScrollReveal().reveal(`.discover__picture-hint, .explore__picture`, {
		origin: 'top',
	});

	ScrollReveal().reveal(`.discover__desc, .premium__desc`, {
		origin: 'left',
	});

	ScrollReveal().reveal(
		`.discover__picture-img, .premium__gallery`,
		{
			origin: 'right',
		}
	);

	ScrollReveal().reveal(`.discover__picture-scroll, .explore__desc`, {
		origin: 'bottom',
	});
}

export default scrollRevealFunc;