window.onload = () => {
	const startAnimation = (entries, observer) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("visible");
			}
		});
	};
	const observer = new IntersectionObserver(startAnimation, {
		root: null,
		rootMargin: "0px",
		threshold: 0.1,
	});

	const span = document.querySelector("span");
	const title = document.querySelector("h1");
	const description = document.querySelector("p");
	const sectionsTitles = document.querySelectorAll("h2");
	const sectionsDescriptions = document.querySelectorAll("section p");
	const sectionsIcons = document.querySelectorAll("section img");
	const sections = document.querySelectorAll("section");
	const footer = document.querySelector("footer p");


	observer.observe(span);
	observer.observe(title);
	observer.observe(description);

	sectionsTitles.forEach((sectionTitle) => {
		observer.observe(sectionTitle);
	});

	sectionsDescriptions.forEach((sectionDescription) => {
		observer.observe(sectionDescription);
	});

	sectionsIcons.forEach((sectionIcon) => {
		observer.observe(sectionIcon);
	});

	sections.forEach((section) => {
		observer.observe(section);
	});

	observer.observe(footer);

};
