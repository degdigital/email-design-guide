import scrollTracker from 'DEGJS/scrollTracker';
import eventAggregator from 'DEGJS/eventAggregator';

let wayfinding = function() {

	let wayfinderEl = document.querySelector('.js-wayfinder'),
		elsToTrack = Array.from(wayfinderEl.querySelectorAll('.js-section-anchor')),
		scrollTrackerInst = scrollTracker();

	function init() {
		eventAggregator.subscribe('scrollTracker.elementInViewportChange', onElementInViewportChange);

		elsToTrack.forEach(function(el) {
			let elToTrack = el.getAttribute('href');
			scrollTrackerInst.trackElement(document.querySelector(elToTrack),
				{
					offset: {
						top: '99vh',
						bottom: '90vh'
					}
				}
			);
		});
	}

	function onElementInViewportChange(e) {

		if(e.isInViewport) {
			let element = e.element.getAttribute('id'),
				wayfinderLink = document.querySelector('.wayfinder__link--' + element);

			elsToTrack.forEach(function(el) {
				el.classList.remove('is-active');
			});
			wayfinderLink.classList.add('is-active');
		} else {
			wayfinderEl.classList.remove('is-active');
		}

	}

	init();
};

export default wayfinding;