export function smoothScroll(target) {
	console.log(target);
	document.querySelector('.' + target).scrollIntoView({ 
		behavior: 'smooth' 
	});
}