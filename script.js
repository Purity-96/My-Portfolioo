
// Select the mobile menu button and navigation links
const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

// Check that both elements exist
if (menuButton && navLinks) {

  // Listen for a click on the menu button
  menuButton.addEventListener("click", () => {

    // Open or close the navigation menu
    const isOpen = navLinks.classList.toggle("open");

    // Update accessibility information
    menuButton.setAttribute("aria-expanded", String(isOpen));

    // Change the button's description
    menuButton.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation"
    );

    // Change the menu icon
    menuButton.textContent = isOpen ? "×" : "☰";
  });

  // Close the menu when a navigation link is clicked
  navLinks.querySelectorAll("a").forEach((link) => {

    link.addEventListener("click", () => {

      navLinks.classList.remove("open");

      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation");

      menuButton.textContent = "☰";
    });

  });
}

// Automatically display the current year in the footer
document.getElementById("year").textContent =
  new Date().getFullYear();
