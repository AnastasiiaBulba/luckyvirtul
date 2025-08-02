// Contact Page Manager
class ContactPageManager {
  constructor() {
    this.form = document.getElementById("contact-form");
    this.successMessage = document.getElementById("success-message");
    this.init();
  }

  init() {
    this.setupFormValidation();
  }

  setupFormValidation() {
    const inputs = this.form.querySelectorAll("input, textarea");

    inputs.forEach((input) => {
      input.addEventListener("blur", () => this.validateField(input));
      input.addEventListener("input", () => this.clearError(input));
    });
  }

  validateField(field) {
    const errorElement = document.getElementById(`${field.id}-error`);

    // Clear previous error
    this.clearError(field);

    // Validate based on field type
    switch (field.id) {
      case "name":
        if (field.value.trim().length < 2) {
          this.showError(field, "Name must be at least 2 characters long");
        }
        break;

      case "phone":
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        if (!phoneRegex.test(field.value.replace(/\s/g, ""))) {
          this.showError(field, "Please enter a valid phone number");
        }
        break;

      case "message":
        if (field.value.trim().length < 10) {
          this.showError(field, "Message must be at least 10 characters long");
        }
        break;
    }
  }

  showError(field, message) {
    const errorElement = document.getElementById(`${field.id}-error`);
    if (errorElement) {
      errorElement.textContent = message;
      field.style.borderColor = "#e74c3c";
    }
  }

  clearError(field) {
    const errorElement = document.getElementById(`${field.id}-error`);
    if (errorElement) {
      errorElement.textContent = "";
      field.style.borderColor = "#e1e5e9";
    }
  }

  validateForm() {
    const inputs = this.form.querySelectorAll("input, textarea");
    let isValid = true;

    inputs.forEach((input) => {
      this.validateField(input);
      const errorElement = document.getElementById(`${input.id}-error`);
      if (errorElement && errorElement.textContent) {
        isValid = false;
      }
    });

    return isValid;
  }

  async handleSubmit(event) {
    event.preventDefault();

    if (!this.validateForm()) {
      return;
    }

    const submitBtn = this.form.querySelector(".submit-btn");
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";

    // Simulate form submission
    await this.simulateSubmission();

    // Show success message
    this.showSuccessMessage();

    // Reset form
    this.resetForm();

    // Re-enable submit button
    submitBtn.disabled = false;
    submitBtn.textContent = "Send Message";
  }

  async simulateSubmission() {
    return new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
  }

  showSuccessMessage() {
    this.successMessage.classList.remove("hidden");
    this.successMessage.innerHTML = `
      <p>Thank you for contacting us! We'll get back to you within 24 hours.</p>
      <p>Your message about 3D Jigsaw Puzzle has been received.</p>
    `;
  }

  resetForm() {
    this.form.reset();
    const inputs = this.form.querySelectorAll("input, textarea");
    inputs.forEach((input) => {
      this.clearError(input);
    });

    // Hide success message after 5 seconds
    setTimeout(() => {
      this.successMessage.classList.add("hidden");
    }, 5000);
  }
}

// Global function for form submission
function handleSubmit(event) {
  const contactManager = new ContactPageManager();
  contactManager.handleSubmit(event);
}

// Initialize contact page when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  new ContactPageManager();
});
