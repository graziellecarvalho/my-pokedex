//----------------------------------//
//------------- SIZING -------------//

/**
 * Get the outer width of a HTML element
 * @param {HTMLElement} el Element to get the width from
 */
export function getWidth(el) {
	if (el === document.body) {
		return document.documentElement.clientWidth;
	}
	return el.offsetWidth;
}

/**
 * Get the outer height of a HTML element
 * @param {HTMLElement} el Element to get the height from
 */
export function getHeight(el) {
	if (el === document.body) {
		return window.innerHeight || document.documentElement.clientHeight;
	}
	return el.offsetHeight;
}

/** Return the viewport width using document.documentElement.clientWidth */
export function getWindowWidth() {
	return document.documentElement.clientWidth;
}

/** Return the viewport height using document.documentElement.clientHeight */
export function getWindowHeight() {
	return document.documentElement.clientHeight;
}

//----------------------------------//
//------------ POSITION ------------//

/**
 * Get the distance from element to top of the page
 * @param {HTMLElement} el DOM reference
 */
export function getOffsetTop(el) {
	let distance = 0;

	// Sum the element offset and all its parents
	do {
		distance += el.offsetTop;
		el = el.offsetParent;
	} while (el);

	return distance < 0 ? 0 : distance;
}

//---------------------------------//
//------------- CLASS -------------//

/**
 * Check if an HTML element has a specific class
 * @param {HTMLElement} node
 * @param {string} className
 */
export function hasClass(node: HTMLElement, className: string) {
	if (node.classList) {
		return node.classList.contains(className);
	}
	const originClass = node.className;
	return ` ${originClass} `.indexOf(` ${className} `) > -1;
}

/**
 * Add the specified class to the HTML element
 * @param {HTMLElement} node
 * @param {string} className
 */
export function addClass(node: HTMLElement, className: string) {
	if (node.classList) {
		node.classList.add(className);
	} else {
		if (!hasClass(node, className)) {
			node.className = `${node.className} ${className}`;
		}
	}
}

/**
 * Remove specified class from the HTML element
 * @param {HTMLElement} node
 * @param {string} className
 */
export function removeClass(node: HTMLElement, className: string) {
	if (node.classList) {
		node.classList.remove(className);
	} else {
		if (hasClass(node, className)) {
			const originClass = node.className;
			node.className = ` ${originClass} `.replace(` ${className} `, ' ');
		}
	}
}
