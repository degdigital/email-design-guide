import siteNav from "components/siteNav";
import sectionAnchors from "components/sectionAnchors";
import wayfinding from "components/wayfinding";

let main = function() {

	let bodyEl = document.body,
		headerEl = bodyEl.querySelector('.site-header'),
		config = {
			bodyEl: bodyEl,
			headerEl: headerEl
		};

	function init() {
		bodyEl.classList.add('js');

		sectionAnchors();
		wayfinding();
		siteNav(config);
	}

	init();
}

export default main();