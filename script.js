const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show the button when the user scrolls down 20% of the page height
window.onscroll = function() {
  if (document.body.scrollTop > window.innerHeight * 0.2 || document.documentElement.scrollTop > window.innerHeight * 0.2) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

// Scroll to the top smoothly when the button is clicked
scrollToTopBtn.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

document.addEventListener("DOMContentLoaded", function() {
  // Load the navbar
  fetch("header.html")
      .then(response => response.text())
      .then(data => {
          document.getElementById("Header").innerHTML = data;
      });
  fetch("navbar.html")
      .then(response => response.text())
      .then(data => {
          document.getElementById("Navbar").innerHTML = data;
      });

  // Load the footer
  fetch("footer.html")
      .then(response => response.text())
      .then(data => {
          document.getElementById("Footer").innerHTML = data;
      });

  fetch("iqac_mom.html")
      .then(response => response.text())
      .then(data => {
          document.getElementById("iqac_mom").innerHTML = data;
      });
});
