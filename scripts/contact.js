// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

const submit = document.querySelector('#submit-button'); //submitButton
const contact = document.querySelector('#contact-page'); //contactPage

submit.addEventListener('click', function() {
  const message = document.createElement('p');
  message.innerHTML = 'Thank you for your message';
  message.style.fontSize = '24px';
  contact.innerHTML = '';
  contact.appendChild(message);
});

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

