document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('complaintForm');
  const messageBox = document.getElementById('messageBox');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const category = document.getElementById('category').value;
      const desc = document.getElementById('desc').value.trim();

      if (!name || !email || !category || !desc) {
        messageBox.style.color = 'red';
        messageBox.textContent = 'Please fill all fields!';
        return;
      }

      // Simulate submission
      messageBox.style.color = 'green';
      messageBox.textContent = `Complaint submitted successfully!`;

      // Clear form
      form.reset();
    });
  }
});
