document.addEventListener("DOMContentLoaded", function () {
  AOS.init();

  const navMenu = document.querySelector(".nav-menu");
  navMenu.addEventListener("click", function () {
    const navBar = document.querySelector(".nav-links");
    navBar.classList.toggle("nav-active");
  });

  const scrollIcon = document.getElementById("scroll-icon");
  if (scrollIcon) {
    scrollIcon.addEventListener("click", function () {
      const firstBodyContainer = document.querySelector(".body-container");
      firstBodyContainer.scrollIntoView({ behavior: "smooth" });
    });
  }

  const contactLink = document.getElementById("contact-btn-link");
  if (contactLink) {
    contactLink.addEventListener("click", function (event) {
      event.preventDefault();

      const contactPage = document.querySelector(".profile-contact");
      contactPage.scrollIntoView({ behavior: "smooth" });
    });
  }

  const homeScrollIcon = document.getElementById("home-scroll-icon");
  if (homeScrollIcon) {
    homeScrollIcon.addEventListener("click", function () {
      const firstHomeBodyContainer = document.querySelector(
        ".home-body-container"
      );
      firstHomeBodyContainer.scrollIntoView({ behavior: "smooth" });
    });
  }
});
