//
// Валидатор формы подписки
//

document.getElementById('subscribeForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const emailInput = document.getElementById('emailInput');
  const errorMessage = document.getElementById('errorMessage');

  emailInput.style.borderColor = '';
  errorMessage.style.display = 'none';

  if (!emailInput.value) {
    emailInput.style.borderColor = '#344b78';
    emailInput.style.borderWidth = '2px';
    errorMessage.textContent = '😔 Please enter your email address';
    errorMessage.style.display = 'block';
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    emailInput.style.borderColor = '#344b78';
    emailInput.style.borderWidth = '2px';
    errorMessage.textContent = '😔 Please enter a valid email address';
    errorMessage.style.display = 'block';
    return;
  }

  errorMessage.style.display = 'block';
  errorMessage.textContent = '😀 Subscription successful!';
});
