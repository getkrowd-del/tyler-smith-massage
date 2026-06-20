function buyPackage(amount, name) {
  var emailInput = document.getElementById('email');
  if (!emailInput || !emailInput.value || !emailInput.value.includes('@')) {
    emailInput.focus();
    emailInput.style.borderColor = '#c0392b';
    alert('Please enter your email address above before purchasing.');
    return;
  }
  emailInput.style.borderColor = '';
  if (typeof window.__processDonation === 'function') {
    window.__processDonation({ amount: amount, email: emailInput.value, productName: name });
  } else {
    alert('Checkout is loading — please try again in a moment.');
  }
}