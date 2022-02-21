/* eslint-disable no-unused-vars */

// Retrieve photographer name
let photographerName = document.querySelector('.photographer-name');
setTimeout(() => {
	let photographer = localStorage.getItem('photographer');
	photographer = JSON.parse(photographer);

	// Insert photographer name in form html
	photographerName.textContent = photographer.name;
}
, 2000);

// Form validation
document.getElementById('contact-form').addEventListener('click', (e) => {
	e.preventDefault();

	// Firstname
	const firstName = document.getElementById('first-name-input');
	const firstNameValue = firstName.value;
	const firstNameErrorMessage = document.getElementById('firstname-error');
	if(firstNameValue.length === 0){
		firstNameErrorMessage.classList.remove('hidden');
	} else {
		firstNameErrorMessage.classList.add('hidden');
	}

	// Lastname
	const lastName = document.getElementById('last-name-input');
	const lastNameValue = lastName.value;
	const lastNameErrorMessage = document.getElementById('lastname-error');
	if(lastNameValue.length === 0){
		lastNameErrorMessage.classList.remove('hidden');
	} else {
		lastNameErrorMessage.classList.add('hidden');
	}

	// Email
	const email = document.getElementById('email-input');
	const emailValue = email.value;
	const emailErrorMessage = document.getElementById('email-error');
	if(emailValue.length === 0){
		emailErrorMessage.classList.remove('hidden');
	} else {
		emailErrorMessage.classList.add('hidden');
	}

	// Message
	const message = document.getElementById('message');
	const messageValue = message.value;
	const messageErrorMessage = document.getElementById('message-error');
	if(messageValue.length === 0){
		messageErrorMessage.classList.remove('hidden');
	} else {
		messageErrorMessage.classList.add('hidden');
	}
	
	if (firstNameValue.length > 0 && lastNameValue.length > 0 && emailValue.length > 0 && messageValue.length > 0) {
		const message = document.querySelector('.successfull-message-container');
		message.style.display = 'flex';
		message.focus();
		console.log('Prénom: ', firstNameValue);
		console.log('Nom: ', lastNameValue);
		console.log('Email: ', emailValue);
		console.log('Message: ', messageValue);
	} 
});

// Open contact modal
setTimeout(() => {
	const modalButton = document.querySelector('.modal-button');
	modalButton.addEventListener('click', () => {
		const modal = document.getElementById('contact_modal');
		const formInput = document.getElementById('first-name-input');
		modal.style.display = 'block';
		formInput.focus();
	});
}
, 1500);

// Close modal with enter key on img
const modal = document.getElementById('contact_modal');
document.querySelector('.modal-close-button').addEventListener('keydown', (e) => {
	if(e.code === 'Enter'){
		modal.style.display = 'none';
	}
});

// Close contact modal
function closeModal() {
	modal.style.display = 'none';
}

// Close modal with escape key
document.addEventListener('keydown', (e) => {
	if(e.code === 'Escape'){
		modal.style.display = 'none';
	}
});

// Close successfull message by clicking
const closeButton = document.querySelector('.message-close-button');
closeButton.addEventListener('click', () => {
	modal.style.display = 'none';
});

// Close successfull message with enter key on img
closeButton.addEventListener('keydown', (e) => {
	if(e.code === 'Enter'){
		modal.style.display = 'none';
	}
});