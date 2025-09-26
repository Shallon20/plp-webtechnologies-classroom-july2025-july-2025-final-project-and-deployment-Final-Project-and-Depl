document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menu-icon");
  const navMenu = document.getElementById("nav-menu");

  menuIcon.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  // Close menu after clicking for mobile UX
  const links = navMenu.querySelectorAll("a");
  links.forEach(link =>
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    })
  );

  // Dark mode toggle setup
  const toggle = document.getElementById("dark-mode-toggle");
  const icon = document.getElementById("mode-icon");

  // Check saved theme on page load
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
      localStorage.setItem("theme", "dark");
    } else {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
      localStorage.setItem("theme", "light");
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent submission until validated

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Name validation
    if (name.length < 2 || name.length > 50) {
      alert("Name must be between 2 and 50 characters.");
      return;
    }

    // Email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Phone validation (digits only, length 7–15)
    const phonePattern = /^\+?[0-9][0-9\s\-]{6,14}$/;

    if (!phone.match(phonePattern)) {
      alert("Phone number must contain 7 to 15 digits.");
      return;
    }

    // Message validation
    if (message.length < 10) {
      alert("Message must be at least 10 characters long.");
      return;
    }

    // If all validations pass
    alert("Form submitted successfully!");
    form.reset();
  });
});
