document.addEventListener('DOMContentLoaded', () => {
  const submitButton = document.getElementById('submitBtn');
  const summaryDiv = document.getElementById('summary');
  const summaryText = document.getElementById('summaryText');
  const workshopSelect = document.getElementById('workshopSelector');
  const yearRadioButtons = document.querySelectorAll('input[name="year"]');
  const successMessage = document.getElementById('successMessage');

  submitButton.addEventListener('click', () => {
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    const dob = document.getElementById('dob').value;
    const college = document.getElementById('college').value.trim();
    const selectedWorkshop = workshopSelect.value;

    let selectedYear = '';
    yearRadioButtons.forEach((radio) => {
      if (radio.checked) selectedYear = radio.value;
    });

    // Validation
    if (!fullName || !email || !password || !confirmPassword || !dob || !college || !selectedWorkshop || !selectedYear) {
      alert('⚠ Please fill out all fields before registering.');
      return;
    }

    if (password !== confirmPassword) {
      alert('⚠ Passwords do not match.');
      return;
    }

    // Save email to localStorage (to use in login form later)
    localStorage.setItem("registeredEmail", email);

    // Summary message (excluding password for security)
    const message = `
      <strong>Name:</strong> ${fullName}<br>
      <strong>Email:</strong> ${email}<br>
      <strong>Date of Birth:</strong> ${dob}<br>
      <strong>College:</strong> ${college}<br>
      <strong>Workshop:</strong> ${selectedWorkshop}<br>
      <strong>Year:</strong> ${selectedYear}
    `;
    summaryText.innerHTML = message;
    summaryDiv.style.display = 'block';

    // Show success + redirect
    successMessage.style.display = 'block';
    setTimeout(() => {
      window.location.href = 'thankyou.html';
    }, 3000);
  });
});
