export function smoothScroll(target) {
	console.log(target);
	document.querySelector('.' + target).scrollIntoView({ 
		behavior: 'smooth' 
	});
}

export var language = 'it';

export function changeLanguage() {
	let it = document.getElementById("it");
	let en = document.getElementById("en");
	let firstToggle = 0;
	if (language === 'it') {
		language = 'en';
		if (firstToggle === 0) {
			it.style.color = "white";
			firstToggle = 1;
		}
		it.classList.remove("active");
		en.classList.add("active");
	} else {
		language = 'it';
		en.classList.remove("active");
		it.classList.add("active");
	}

}

