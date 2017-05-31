let siteNav = function(config) {

	if (config.headerEl !==null) {

		let navTriggerEl = config.headerEl.querySelector('.js-primary-nav__toggle'),
			primaryNavEl = config.headerEl.querySelector('.js-primary-nav__list');

		function init() {
			navTriggerEl.addEventListener('click', navToggle);
			primaryNavEl.addEventListener('click', closeNav);
		}

		function navToggle(e) {
			e.preventDefault();
			config.bodyEl.classList.toggle('is-open');
		}

		function closeNav(e) {
			let clickedEl = e.target;
			if (clickedEl.classList.contains('js-section-anchor')) {
				navToggle(e);
			}
		}

		init();
	}

};

export default siteNav;
