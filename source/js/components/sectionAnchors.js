import scrollTo from 'DEGJS/scrollTo';

let sectionAnchors = function(clickCallback) {

	function init() {
		window.addEventListener('click', onWindowClick);
	}

	function onWindowClick(e) {
		if(e.target.classList.contains('js-section-anchor')) {
			e.preventDefault();

			let sectionId = e.target.getAttribute('href').replace('#', '');
			scrollToSection(sectionId);
		}
	}

	function scrollToSection(sectionId) {
		if(clickCallback && clickCallback(sectionId)) {
			return;
		}

		let sectionEl = document.querySelector('#' + sectionId);

		if(sectionEl) {
			scrollTo({
				element: sectionEl
			});
		}
	}

	init();
};

export default sectionAnchors;