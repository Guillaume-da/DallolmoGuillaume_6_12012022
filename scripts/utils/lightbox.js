// eslint-disable-next-line no-unused-vars
function lightbox() {
	const closeButton = document.querySelector('.close-button');
	setTimeout(() => {
		// const leftArrow = document.querySelector('.fa-angle-left');
		const lightboxContainer = document.querySelector('.lightbox-container');
		const newImg = document.querySelector('.lightbox-item-image');
		const newVideo = document.querySelector('.lightbox-item-video');
		const images = document.querySelectorAll('.gallery-img');
		const title = document.querySelector('.lightbox-item-title');
		function mediaDisplay(image, e) {
			if (image.tagName == 'IMG') {
				
				// Display lightbox
				lightboxContainer.style.display = 'block';
				
				// Hide video
				newVideo.style.display = 'none';

				// Display image
				newImg.style.display = 'block';

				// Add src attributes to image
				newImg.setAttribute('src', `${e.target.src}`);
				newImg.setAttribute('alt', `${e.target.title}`);
				newImg.setAttribute('tabindex', '0');
				newImg.setAttribute('aria-label', `${e.target.title}`);

				// Insert title
				title.innerHTML = e.target.title;

				// Put focus on navigation for screen readers
				newImg.focus();
			} else if (image.tagName == 'VIDEO') {
				
				// Display lightbox
				lightboxContainer.style.display = 'block';

				// Hide image
				newImg.style.display = 'none';

				// Display video
				newVideo.style.display = 'block';

				// Or Add src attributes to video
				newVideo.setAttribute('src', `${e.target.src}`);
				newVideo.setAttribute('autoplay', 'true');
				newVideo.setAttribute('title', `${e.target.title}`);
				newVideo.setAttribute('tabindex', '0');
				newVideo.setAttribute('aria-label', `${e.target.title}`);
				
				// Insert title
				title.innerHTML = e.target.title;

				// Put focus on navigation for screen readers
				newVideo.focus();
			}
		}
		images.forEach((image) => {
			image.addEventListener('click', (e) => {
				mediaDisplay(image, e);
			});
		});
		images.forEach((image) => {
			image.addEventListener('keydown', (e) => {
				if(e.code === 'Enter'){
					mediaDisplay(image, e);
				}
			});
		});

		// Hide lightbox when click on close button
		closeButton.addEventListener('click', () => {
			lightboxContainer.style.display = 'none';
		});

		// Hide lightbox with escape key
		document.addEventListener('keydown', (e) => {
			if(e.code === 'Escape'){
				lightboxContainer.style.display = 'none';
			}
		});
	}, 1800);
}

// eslint-disable-next-line no-unused-vars
function lightboxNavigation() {
	const lightboxContainer = document.querySelector('.lightbox-container');
	function navigation(direction) {
		let data = localStorage.getItem('sortedResult');
		data = JSON.parse(data);
		let clickedImg = document.querySelector('.lightbox-item-image');
		let clickedVideo = document.querySelector('.lightbox-item-video');
		if (clickedImg.style.display == 'none') {
			clickedImg = clickedVideo;
		}

		// Find image title
		let currentImgName = clickedImg.src.split('images/')[1];

		// Find image position in array
		let imageIndex = data.findIndex((x) => x.image == currentImgName);

		// Find name index in array for videos
		if (imageIndex < 0) {
			imageIndex = data.findIndex((x) => x.video == currentImgName);
		}

		// Allow to go from first position to last position in left direction
		if (direction == -1 && imageIndex == 0) {
			imageIndex = data.length;
		}

		// Allow to go from last position to first position in right direction
		if (direction == +1 && imageIndex == data.length - 1) {
			imageIndex = -1;
		}

		let nextImg = data[imageIndex + direction].image;
		let nextVid = data[imageIndex + direction].video;

		// Insert new title image
		const title = document.querySelector('.lightbox-item-title');
		title.innerHTML = data[imageIndex + direction].title;
		
		const img = document.querySelector('.lightbox-item-image');
		const video = document.querySelector('.lightbox-item-video');

		// If next item is an image
		if (typeof nextVid == 'undefined') {
			
			// Hide video
			video.style.display = 'none';
			img.style.display = 'block';

			// Set src to image
			img.src = './assets/images/' + nextImg;
			img.setAttribute('alt', data[imageIndex + direction].title);
			img.setAttribute('tabindex', '0');
			img.setAttribute('aria-label', data[imageIndex + direction].title);
			img.focus();

		} else {
			let nextVid = data[imageIndex + direction].video;

			// Hide image
			img.style.display = 'none';
			video.style.display = 'block';

			// Set src to video
			video.src = './assets/images/' + nextVid;
			video.setAttribute('autoplay', 'true');
			video.setAttribute('title', data[imageIndex + direction].title);
			video.setAttribute('tabindex', '0');
			video.setAttribute('aria-label', data[imageIndex + direction].title);
			video.focus();
		}
	}

	// Left arrow click
	const leftArrow = document.querySelector('.left-arrow');
	leftArrow.addEventListener('click', () => {
		const leftDirection = -1;
		navigation(leftDirection);
	});

	// Right arrow click
	const rightArrow = document.querySelector('.right-arrow');
	rightArrow.addEventListener('click', () => {
		const rightDirection = +1;
		navigation(rightDirection);
	});

	// Navigation with arrow keys
	document.addEventListener('keydown', (e) => {
		if(e.code === 'ArrowRight'){
			const leftDirection = +1;
			navigation(leftDirection);
		}
		if(e.code === 'ArrowLeft'){
			const leftDirection = -1;
			navigation(leftDirection);
		}
		if(lightboxContainer && e.code === 'Enter'){
			const media = document.querySelector('.lightbox-item-video');
			media.play();
		} 
	});

	leftArrow.addEventListener('keydown', (e) => {
		if(e.code === 'Enter'){
			const leftDirection = -1;
			navigation(leftDirection);
		} 
	});

	rightArrow.addEventListener('keydown', (e) => {
		if(e.code === 'Enter'){
			const rightDirection = +1;
			navigation(rightDirection);
		} 
	});

	// Hide lightbox when selecting close button with tab and enter key
	const closeButton = document.querySelector('.close-button');
	closeButton.addEventListener('keydown', (e) => {
		if(e.code === 'Enter'){
			lightboxContainer.style.display = 'none';
		}
	});
}