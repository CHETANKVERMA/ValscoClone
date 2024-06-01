// Function for loading animation
window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  const animationDuration = 3600; // Animation duration in milliseconds

  setTimeout(function () {
    preloader.style.display = "none";
  }, animationDuration);

  // Check if the preloader should be shown based on session storage
  const shouldShowPreloader = sessionStorage.getItem("showPreloader");
  if (shouldShowPreloader === "false") {
    preloader.style.display = "none";
  } else {
    sessionStorage.setItem("showPreloader", "false");
  }
});

// functions for button-scrolling to the rerquired page
function scrollToSectionProducts() {
  const targetSection = document.getElementById("target-section-1");
  targetSection.scrollIntoView({ behavior: "smooth" });
}

function scrollToSectionBlogs() {
  const targetSection = document.getElementById("target-section-2");
  targetSection.scrollIntoView({ behavior: "smooth" });
}

function scrollToSectionContactUs() {
  const targetSection = document.getElementById("target-section-3");
  targetSection.scrollIntoView({ behavior: "smooth" });
}

function scrollToSectionAboutUs() {
  const targetSection = document.getElementById("target-section-4");
  targetSection.scrollIntoView({ behavior: "smooth" });
}

//Blog directing buttons
function navigateToSecondPageAkshat() {
  window.location.href = "https://valscotech.com/BlogPage/BB3kYZMXjDw8Jr6I0fsQ";
}

function navigateToSecondPageAyan() {
  window.location.href =
    "https://www.valscotech.com/BlogPage/GVuzR35NcTKA70pSjDKk";
}

function navigateToSecondPageNishita() {
  window.location.href =
    "https://www.valscotech.com/BlogPage/kGdtskcO7XdIpW3D637h";
}
