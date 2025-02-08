document.addEventListener("DOMContentLoaded", function () {
  // select all nav links
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // remove "active" from all links
      navLinks.forEach((nav) => nav.classList.remove("active"));

      //   add 'active' class to the clicked link
      this.classList.add("active");
    });
  });
});
