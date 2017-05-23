import scrollTracker from "DEGJS/scrollTracker";
import eventAggregator from "DEGJS/eventAggregator";

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
						top: "585px",
						bottom: "585px"
					}
				}
			);
		});
	}

	function onElementInViewportChange(e) {

	 	if(e.isInViewport) {
			wayfinderEl.classList.add('is-active');
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
}

export default wayfinding;